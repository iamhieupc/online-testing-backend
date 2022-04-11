import { Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';

@Injectable()
export class AuthService {
  constructor() {}
  async login(login: LoginDto): Promise<any> {}

  async register(registerDto: RegisterDto): Promise<any> {
    const { name, email, password } = registerDto;
  }
}
