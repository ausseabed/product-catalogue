import { IsString, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ErrorDto {
  @ApiProperty({
    description: 'HTTP status code'
  })
  @IsInt()
  statusCode: number;

  @ApiPropertyOptional()
  @ApiProperty({
    description: 'Message'
  })
  @IsString()
  message: string;

  @ApiPropertyOptional()
  @ApiProperty({
    description: 'Error string'
  })
  @IsString()
  error: string | undefined;
}
