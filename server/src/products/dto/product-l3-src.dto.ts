import { ProductDto } from "./product.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum } from "class-validator";
import { VerticalDatum } from "../product.entity";
import { Style } from '../style.entity';

export class ProductL3SrcDto extends ProductDto {
  @IsString()
  @ApiProperty({
    description: 'Resolution of product for display purposes '
  })
  resolution: string;

  @IsString()
  @ApiProperty({
    description: 'Location of final tif product '
  })
  productTifLocation: string;
 
  @IsString()
  @ApiProperty({
    description: 'Location of final bag product '
  })
  productBagLocation: string;

  @IsEnum(VerticalDatum)
  @ApiProperty({ enum: VerticalDatum,
    description: `Vertical datum of bathymetry
* \`LAT\` - Lowest Astronomical Tide
* \`AHD\` - Australian Height Datum
* \`LMSL\` - LMSL - Local Mean Sea Level (or just Mean Sea Level)
* \`WGS84\` - WGS84 'Ellipsoid'`
  })
  verticalDatum: VerticalDatum;

  @ApiProperty({
    description: 'Default style in web map service',
    required: false,
    type: Style
  })
  defaultStyle: Style;

  @ApiProperty({
    description: 'Available styles in web map service',
    required: false,
    type: [Style]
  })
  availableStyles: Style[];
}
