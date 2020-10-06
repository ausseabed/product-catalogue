import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductL3DistDto {
  @IsString()
  @ApiProperty({
    description: 'Location of coverage extent of L3 product'
  })
  l3CoverageLocation: string;

  @ApiProperty({
    description: 'S3 location of hillshade'
  })
  @IsString()
  hillshadeLocation: string;

  @ApiProperty({
    description: 'Location of the raster bathymetry'
  })
  @IsString()
  bathymetryLocation: string;

  @ApiProperty({
    description: 'Location of BAG format bathymetry'
  })
  @IsString()
  bathymetryBagLocation: string;
}
