import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RelationSummaryDto {
  @ApiProperty({
    description: 'Identifier of the relation between the products'
  })
  @IsInt()
  relation_id;

  @ApiProperty({
    description: 'Identifier of the survey/compilation that contains the products'
  })
  @IsInt()
  survey_id;

  @ApiProperty({
    description: 'Identifier of the products'
  })
  @IsInt()
  product_id;

  @ApiProperty({
    description: 'The name of the product'
  })
  @IsString()
  product_name;
}
