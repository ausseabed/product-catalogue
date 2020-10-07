import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SurveyL2RelationDto {
  @ApiProperty({
    description: 'Identifier of the survey that produced the products'
  })
  @IsInt()
  survey: number;

  @ApiProperty({
    description: 'Identifier of the product produced as part of the survey'
  })
  @IsInt()
  productL2Src: number;
}
