import { httpErrors } from './../../shares/exceptions/index';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserRepository } from 'src/models/repositories/users.repository';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { User } from 'src/models/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userRepo: UserRepository) {}
  async login(login: LoginDto): Promise<any> {}

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
    await this.userRepo.save(_user);
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
}
