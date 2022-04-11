import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    required: true,
    example: 'chihieusky@gmail.com',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    required: true,
    example: 'chi hieu',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    required: true,
    example: '123456',
  })
  @IsNotEmpty()
  readonly password: string;
}
