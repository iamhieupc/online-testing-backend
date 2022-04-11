import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/shares/dtos/response.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor() {}

  @Post('login')
  async login(): Promise<ResponseDto<any>> {
    return { data: 'hieu' };
  }
}
