import { Column, Entity, ViewEntity, ViewColumn } from "typeorm";
import { ProductL0Src } from "./product-l0-src.entity";

@ViewEntity({name: "product_l0_dist_with_history", expression: `SELECT * FROM "product_l0_dist" UNION ALL SELECT * FROM "product_l0_dist_history"`})
export class ProductL0DistHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "l0CoverageLocation" })
  l0CoverageLocation: string;

  @ViewColumn( { name: "sourceProductId" })
  sourceProduct: number | ProductL0Src;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
