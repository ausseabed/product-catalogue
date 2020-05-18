import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompositeL3RelationDto {
  @ApiProperty({
    description: 'Identifier of the composite that contains the products'
  })
  @IsInt()
  composite: number;

  @ApiProperty({
    description: 'Identifier of the product'
  })
  @IsInt()
  productL3Src: number;
}
