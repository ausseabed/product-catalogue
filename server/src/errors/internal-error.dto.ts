import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InternalErrorDto {
  @IsString()
  errno: string;

  @IsString()
  code: string;

  @IsString()
  syscall: string;

  @IsString()
  hostname: string;
}
