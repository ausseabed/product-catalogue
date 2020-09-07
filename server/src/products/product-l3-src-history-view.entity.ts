import { ViewEntity, ViewColumn } from "typeorm";
import { VerticalDatum } from "./product.entity";

@ViewEntity({name: "product_l3_src_with_history", expression: `SELECT * FROM "product_l3_src" UNION ALL SELECT * FROM "product_l3_src_history"`})
export class ProductL3SrcHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "uuid" })
  uuid: string;

  @ViewColumn( { name: "name" })
  name: string;

  @ViewColumn( { name: "srs" })
  srs: string;

  @ViewColumn( { name: "verticalDatum" })
  verticalDatum: VerticalDatum;

  @ViewColumn( { name: "metadataPersistentId" })
  metadataPersistentId: string;

  @ViewColumn( { name: "resolution" })
  resolution: string;

  @ViewColumn( { name: "productTifLocation" })
  productTifLocation: string;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
