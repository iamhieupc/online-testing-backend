import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { httpErrors } from 'src/shares/exceptions';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secretOrKey: jwtConstants.accessTokenSecret,
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    // const user = await this.adminService.findAdminById(payload.userId);
    // console.log(user);
    // if (!user) {
    //   throw new HttpException(httpErrors.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
    // }
    // return user;
  }
}
