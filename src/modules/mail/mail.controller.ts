import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Cache } from 'cache-manager';
import { verifyEmailDto } from './dtos/verifyEmail.dto';
import { MailService } from './mail.service';

@Controller('mail')
@ApiTags('mail')
export class MailController {
  constructor(
    private mailService: MailService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get('test-mail')
  async testSendMail(): Promise<void> {
    // await this.mailService.sendVerifyEmail({
    //   verifyEmailLink: 'hieu',
    //   sendTo: 'chihieusky@gmail.com',
    // });
    const redis = await this.cacheManager.get('MAIL_CACHE_19');
    console.log('redis: ', redis);
  }

  @Post('verify-email')
  @ApiBody({
    type: verifyEmailDto,
  })
  async verifyEmail(@Body() verifyEmailDto: verifyEmailDto): Promise<any> {
    try {
      await this.mailService.verifyEmail(verifyEmailDto);
      return {
        data: 'verify account success',
      };
    } catch (error) {
      return error;
    }
  }
}
