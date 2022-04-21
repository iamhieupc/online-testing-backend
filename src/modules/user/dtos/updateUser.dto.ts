import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: 'chihieusky@gmail.com',
  })
  email?: string;

  @ApiProperty({
    example: 'chi hieu',
  })
  name?: string;

  @ApiProperty({
    example: '123456',
  })
  password?: string;

  @ApiProperty({
    example: 'abcxyz',
  })
  refresh_token?: string;

  // @ApiProperty({
  //   example: 'abcxyz',
  // })
  refresh_token_expires?: number;

  status?: number;
}
