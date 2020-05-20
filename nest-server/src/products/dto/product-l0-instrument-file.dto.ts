import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductL0InstrumentFileDto {
  @IsString()
  @ApiProperty({
    description: 'Location of instrument file'
  })
  instrumentFile: string;

  @IsString()
  @ApiProperty({
    description: 'Location of shapefile describing instrument file extent'
  })
  coverageFile: string;
}
