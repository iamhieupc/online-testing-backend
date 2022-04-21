import { DatabaseCommonModule } from './models/database-common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BullModule } from '@nestjs/bull';
import { MailModule } from './modules/mail/mail.module';
import { CacheModule } from '@nestjs/common';

export const Modules = [
  UserModule,
  DatabaseCommonModule,
  AuthModule,
  CacheModule.register(),
  MailModule,
  BullModule.forRoot({
    // Bull Queue
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  }),
];
export default Modules;
