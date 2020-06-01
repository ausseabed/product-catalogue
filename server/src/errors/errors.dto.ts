import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto {
  @ApiProperty({
    description: 'HTTP status code'
  })
  @IsInt()
  statusCode: number;

  @ApiProperty({
    description: 'Message'
  })
  @IsString()
  message: string;

  @ApiProperty({
    description: 'Error string'
  })
  @IsString()
  error: string | undefined;
}
