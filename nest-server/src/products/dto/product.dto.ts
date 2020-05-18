import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {
  @IsString()
  @ApiProperty({
    description: 'Unique identifier for reference purposes'
  })
  uuid: string;
  @IsString()
  @ApiProperty({
    description: 'Name of product for display purposes - from gazeteer'
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: 'Spatial Reference of product'
  })
  srs: string;
  @IsString()
  @ApiProperty({
    description: 'Persistent Id of final product '
  })
  metadataPersistentId: string;
}
