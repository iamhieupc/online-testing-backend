import { httpErrors } from './../../shares/exceptions/index';
import {
  Injectable,
  HttpException,
  HttpStatus,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';
import { UserRepository } from 'src/models/repositories/users.repository';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { User } from 'src/models/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './strategies/jwt.payload';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { UpdateUserDto } from 'src/modules/user/dtos/updateUser.dto';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from '../mail/mail.service';

const refreshTokenConfig = {
  expiresIn: jwtConstants.refreshTokenExpiry,
  secret: jwtConstants.refreshTokenSecret,
};

@Injectable()
export class AuthService {
  public static ttlRefreshToken = 604800;
  public static MAIL_PREFIX = 'MAIL_CACHE_';
  public static MAIL_TTL = 300;
  public static MAIL_DOMAIN = process.env.MAIL_DOMAIN;
  constructor(
    private userRepo: UserRepository,
    private jwtService: JwtService,
    private mailService: MailService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;
    const findUserByEmail = await this.userRepo.findUserByEmail(email);
    if (!findUserByEmail) {
      throw new HttpException(
        httpErrors.ACCOUNT_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }
    const checkPassword = this.decodePassword(
      password,
      findUserByEmail.password,
    );
    if (!checkPassword) {
      throw new HttpException(
        httpErrors.ACCOUNT_WRONG_PASSWORD,
        HttpStatus.BAD_REQUEST,
      );
    }

    let refreshTokenExpries, refreshToken;

    if (
      findUserByEmail.refresh_token_expires &&
      new Date().getTime() <=
        findUserByEmail.refresh_token_expires + AuthService.ttlRefreshToken
    ) {
      refreshTokenExpries = findUserByEmail.refresh_token_expires;
      refreshToken = findUserByEmail.refresh_token;
    } else {
      refreshToken = await this.generateRefreshToken(findUserByEmail);
      const updateUser: UpdateUserDto = {
        refresh_token: refreshToken,
        refresh_token_expires:
          new Date().getTime() + AuthService.ttlRefreshToken,
      };

      await this.userRepo.updateUser(updateUser, findUserByEmail.id);
    }

    const user = await this.userRepo.findUserByEmail(email);
    return {
      access_token: await this.generateAccessToken({
        email: findUserByEmail.email,
        key: '123',
      }),
      ...user,
    };
  }

  async register(registerDto: RegisterDto): Promise<User> {
    const { name, email, password } = registerDto;
    const user = await this.userRepo.findUserByEmail(email);
    if (user) {
      throw new HttpException(
        httpErrors.ACCOUNT_EXISTED_BY_EMAIL,
        HttpStatus.BAD_REQUEST,
      );
    }
    const saltOrRounds = 10;
    const hashPassword = await this.encodePassword(password, saltOrRounds);
    const _user = new User();
    _user.name = name;
    _user.email = email;
    _user.password = hashPassword;
    // not verify
    _user.status = 0;

    // save into db
    await this.userRepo.save(_user);

    // set token into cache to verify email
    const tokenVerify = uuidv4();
    await this.cacheManager.set(
      `${AuthService.MAIL_PREFIX}${_user.id}`,
      tokenVerify,
      { ttl: AuthService.MAIL_TTL },
    );
    const verifyEmailLink = `${AuthService.MAIL_DOMAIN}verify-email/${_user.id}/${tokenVerify}`;
    const sendTo = _user.email;
    await this.mailService.sendVerifyEmail({ verifyEmailLink, sendTo });
    const redis = await this.cacheManager.get(
      `${AuthService.MAIL_PREFIX}${_user.id}`,
    );
    console.log('redis: ', redis);
    console.log(
      '`${AuthService.MAIL_PREFIX}${_user.id}`: ',
      `${AuthService.MAIL_PREFIX}${_user.id}`,
    );
    return _user;
  }

  async encodePassword(password: string, salt: number): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  async decodePassword(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }

  async generateAccessToken(payload: JwtPayload): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async generateRefreshToken(user: User): Promise<string> {
    const refreshTokenPayload = { sub: user.id };
    return this.jwtService.sign(refreshTokenPayload, refreshTokenConfig);
  }

  async refreshAccessToken(
    refreshToken: string,
  ): Promise<{ accessToken: string }> {
    // get info user from refreshToken
    const decodeAccessToken = await this.jwtService.verify(
      refreshToken,
      refreshTokenConfig,
    );

    // const email = decodeAccessToken['email'];
    const userId = decodeAccessToken.sub;
    const user = await this.getUserIfRefreshTokenMatch(refreshToken, userId);
    const payload = { sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async getUserIfRefreshTokenMatch(
    refreshToken: string,
    userId: number,
  ): Promise<User> {
    const user = await this.userRepo.getUserById(userId);

    if (!user)
      throw new HttpException({ key: 'user.NOT_EXISTS' }, HttpStatus.NOT_FOUND);
    let isRefreshTokenMatching = false;

    if (refreshToken === user.refresh_token) {
      isRefreshTokenMatching = true;
    }

    if (!isRefreshTokenMatching)
      throw new HttpException(
        { key: 'user.REFRESH_TOKEN_INVALID' },
        HttpStatus.UNAUTHORIZED,
      );

    return user;
  }
}
