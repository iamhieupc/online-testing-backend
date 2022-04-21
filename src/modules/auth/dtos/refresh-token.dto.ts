import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({
    required: true,
    example: '',
  })
  @IsNotEmpty()
  refresh_token: string;
}
