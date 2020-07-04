import { Column, Entity, ViewEntity, ViewColumn } from "typeorm";
import { ProductL3Src } from "./product-l3-src.entity";
import { Exclude } from "class-transformer";

@ViewEntity({name: "product_l3_dist_with_history", expression: `SELECT * FROM "product_l3_dist" UNION ALL SELECT * FROM "product_l3_dist_history"`})
export class ProductL3DistHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "l3CoverageLocation" })
  l3CoverageLocation: string;

  @ViewColumn( { name: "bathymetryLocation" })
  bathymetryLocation: string;

  @ViewColumn( { name: "hillshadeLocation" })
  hillshadeLocation: string;

  @ViewColumn( { name: "sourceProductId" })
  sourceProduct: number | ProductL3Src;

  @Exclude()
  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
