import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { httpErrors } from 'src/shares/exceptions';
import { JwtPayload } from './jwt.payload';
import { jwtConstants } from '../auth.constants';
import { UserRepository } from 'src/models/repositories/users.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepo: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.accessTokenSecret,
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    const user = await this.userRepo.findUserByEmail(payload.email);
    console.log(user);
    if (!user) {
      throw new HttpException(httpErrors.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
