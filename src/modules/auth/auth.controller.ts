import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { User } from 'src/models/entities/user.entity';
import { ResponseDto } from 'src/shares/dtos/response.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(): Promise<ResponseDto<any>> {
    return { data: 'hieu' };
  }

  @Post('register')
  @ApiBody({
    type: RegisterDto,
  })
  async register(@Body() registerDto: RegisterDto): Promise<ResponseDto<User>> {
    console.log('registerDto: ', registerDto);
    const user = await this.authService.register(registerDto);
    return { data: user };
  }
}
