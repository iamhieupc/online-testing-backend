import { CacheModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';
import { jwtConstants } from './auth.constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.accessTokenSecret,
      signOptions: { expiresIn: jwtConstants.accessTokenExpiry },
    }),
    CacheModule.register(),
    MailModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
