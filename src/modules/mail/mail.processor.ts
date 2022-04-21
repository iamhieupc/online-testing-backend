import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('mail')
export class MailProcessor {
  constructor(
    private readonly mailerService: MailerService,
    private readonly logger: Logger,
  ) {}

  @Process('sendVerifyEmailAccount')
  async sendVerifyEmailCreateAccount(job: Job): Promise<boolean> {
    const body = job.data;
    this.logger.debug(`Start job: sendMail verify email`);
    try {
      await this.mailerService.sendMail({
        from: 'hieu.phan@sotatek.com',
        to: body.sendTo,
        subject: 'Verify email',
        template: 'src/modules/mail/templates/verifyAccount.hbs',
        context: { email: body.sendTo, verifyEmailLink: body.verifyEmailLink },
      });
    } catch (e) {
      this.logger.debug(e);
    }
    this.logger.log(`Done job: sendEmail verify email`);
    return true;
  }
}
