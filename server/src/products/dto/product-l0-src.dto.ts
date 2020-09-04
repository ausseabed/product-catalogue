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
  @ApiProperty({
    description: 'Vertical datum of bathymetry'
  })
  verticalDatum: VerticalDatum;
  
}
