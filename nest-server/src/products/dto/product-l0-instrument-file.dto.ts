import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductL0InstrumentFileDto {
  @IsString()
  @ApiProperty({
    description: 'Location of instrument files'
  })
  l0InstrumentFile: string;
}
