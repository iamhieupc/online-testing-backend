import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    required: true,
    example: 'chihieusky@gmail.com',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    required: true,
    example: '123456',
  })
  @IsNotEmpty()
  readonly password: string;
}
