import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompositeDto {
  @ApiProperty({
    description: 'Name of product for display purposes - from gazeteer'
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Unique identifier for reference purposes'
  })
  @IsString()
  uuid: string;

  @ApiProperty({
    description: 'Year of product for display purposes'
  })
  @IsString()
  year: string;
}
