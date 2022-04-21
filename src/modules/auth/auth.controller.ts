import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { User } from 'src/models/entities/user.entity';
import { ResponseDto } from 'src/shares/dtos/response.dto';
import { AuthService } from './auth.service';
import { RefreshTokenDto } from './dtos/refresh-token.dto';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiBody({
    type: LoginDto,
  })
  async login(@Body() loginDto: LoginDto): Promise<ResponseDto<any>> {
    return await this.authService.login(loginDto);
  }

  @Post('register')
  @ApiBody({
    type: RegisterDto,
  })
  async register(@Body() registerDto: RegisterDto): Promise<ResponseDto<User>> {
    const user = await this.authService.register(registerDto);
    return { data: user };
  }

  @Post('refresh-access-token')
  @ApiBody({
    type: RefreshTokenDto,
  })
  async refreshAccessToken(
    @Body() refreshTokenDto: RefreshTokenDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.refreshAccessToken(
      refreshTokenDto.refresh_token,
    );
  }
}
