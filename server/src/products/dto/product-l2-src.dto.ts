import { ProductDto } from "./product.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum } from "class-validator";
import { VerticalDatum } from "../product.entity";

export class ProductL2SrcDto extends ProductDto {
  @IsString()
  @ApiProperty({
    description: 'Location of gsf input product'
  })
  productGsfLocation: string;
 
  @IsString()
  @ApiProperty({
    description: 'Location of vessel file input'
  })
  vesselFileLocation: string;

  @IsString()
  @ApiProperty({
    description: 'Folder location for posmv 000 inputs'
  })
  productPosmvLocation: string;

  @IsEnum(VerticalDatum)
  @ApiProperty({ enum: VerticalDatum,
    description: `Vertical datum of bathymetry
* \`LAT\` - Lowest Astronomical Tide
* \`AHD\` - Australian Height Datum
* \`LMSL\` - LMSL - Local Mean Sea Level (or just Mean Sea Level)
* \`WGS84\` - WGS84 'Ellipsoid'`
  })
  verticalDatum: VerticalDatum;
  
}
