import {
  CACHE_MANAGER,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Cache } from 'cache-manager';
import { Queue } from 'bull';
import { verifyEmailDto } from './dtos/verifyEmail.dto';
import { httpErrors } from 'src/shares/exceptions';
import { UpdateUserDto } from '../user/dtos/updateUser.dto';
import { UserRepository } from 'src/models/repositories/users.repository';

@Injectable()
export class MailService {
  public static MAIL_PREFIX = 'MAIL_CACHE_';
  constructor(
    @InjectQueue('mail') private readonly emailQueue: Queue,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly userRepository: UserRepository,
  ) {}

  async sendVerifyEmail(data: { verifyEmailLink; sendTo }): Promise<void> {
    await this.emailQueue.add('sendVerifyEmailAccount', data);
  }

  async verifyEmail(verifyEmailDto: verifyEmailDto): Promise<void> {
    const { userId, token } = verifyEmailDto;
    const tokenInCache = await this.cacheManager.get(
      `${MailService.MAIL_PREFIX}${userId}`,
    );
    if (!tokenInCache || tokenInCache !== token) {
      throw new HttpException(
        httpErrors.WRONG_TOKEN_VERIFY,
        HttpStatus.BAD_REQUEST,
      );
    }
    const updateUser: UpdateUserDto = {
      status: 1,
    };
    await this.userRepository.updateUser(updateUser, userId);
  }
}
