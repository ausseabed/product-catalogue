import { ProductDto } from "./product.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum } from "class-validator";
import { VerticalDatum } from "../product.entity";

export class ProductL3SrcDto extends ProductDto {
  @IsString()
  @ApiProperty({
    description: 'Resolution of product for display purposes '
  })
  resolution: string;

  @IsString()
  @ApiProperty({
    description: 'Location of final product '
  })
  productTifLocation: string;
  
  @IsEnum(VerticalDatum)
  @ApiProperty({ enum: VerticalDatum,
    description: `Vertical datum of bathymetry
* \`Lat\` - Lowest Astronomical Tide
* \`AHD\` - Australian Height Datum
* \`LMSL\` - LMSL - Local Mean Sea Level (or just Mean Sea Level)
* \`WGS84\` - WGS84 'Ellipsoid'`
  })
  verticalDatum: VerticalDatum;
  
}
