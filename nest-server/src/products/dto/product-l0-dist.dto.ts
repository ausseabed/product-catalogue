import { ProductDto } from "./product.dto";
import { IsString } from "class-validator";
import { ProductL0InstrumentFile } from "../product-l0-instrument-file.entity";
import { ApiProperty } from "@nestjs/swagger";

export class ProductL0DistDto extends ProductDto {
  // l0InstrumentFiles: ProductL0InstrumentFile[];

  @IsString()
  @ApiProperty({
    description: 'Location of coverage file for extent'
  })
  l0CoverageLocation: string; // Location of shapefile 
}
