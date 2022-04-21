import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class verifyEmailDto {
  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsNotEmpty()
  readonly userId: number;

  @ApiProperty({
    required: true,
    example: 'abcxyz',
  })
  @IsNotEmpty()
  readonly token: string;
}
