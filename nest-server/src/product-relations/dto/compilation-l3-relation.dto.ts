import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompilationL3RelationDto {
  @ApiProperty({
    description: 'Identifier of the compilation that contains the products'
  })
  @IsInt()
  compilation: number;

  @ApiProperty({
    description: 'Identifier of the product'
  })
  @IsInt()
  productL3Src: number;
}
