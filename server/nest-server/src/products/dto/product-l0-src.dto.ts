import { ProductDto } from "./product.dto";
import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductL0SrcDto extends ProductDto {
  @IsString()
  @ApiProperty({
    description: 'Location of instrument files'
  })
  l0InstrumentLocation: string;
}
