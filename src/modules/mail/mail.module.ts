import { MailerModule } from '@nestjs-modules/mailer';
import { CacheModule, Logger, Module, Provider } from '@nestjs/common';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { BullModuleOptions } from '@nestjs/bull/dist/interfaces/bull-module-options.interface';
import { BullModule } from '@nestjs/bull';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { mailConfig } from 'src/configs/mail.config';
import { MailProcessor } from './mail.processor';

const bullOptions: BullModuleOptions = { name: 'mail' };
const providers: Provider[] = [Logger, MailService, MailProcessor];
console.log('mailConfig: ', mailConfig);

@Module({
  imports: [
    MailerModule.forRoot({
      transport: mailConfig,
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      preview: true,
      template: {
        dir: process.cwd() + '/src/modules/mail/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    BullModule.registerQueue(bullOptions),
    CacheModule.register(),
  ],
  providers: providers,
  controllers: [MailController],
  exports: [MailService],
})
export class MailModule {}
