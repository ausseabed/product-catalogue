import { ProductDto } from "./product.dto";
import { IsString, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { VerticalDatum } from "../product.entity";

export class ProductL0SrcDto extends ProductDto {
  @IsString()
  @ApiProperty({
    description: 'Location of instrument files'
  })
  l0InstrumentLocation: string;
    
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
