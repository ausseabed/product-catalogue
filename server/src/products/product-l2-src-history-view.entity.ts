import { ViewEntity, ViewColumn } from "typeorm";
import { VerticalDatum } from "./product.entity";

@ViewEntity({name: "product_l2_src_with_history", expression: `SELECT * FROM "product_l2_src" UNION ALL SELECT * FROM "product_l2_src_history"`})
export class ProductL2SrcHistoryView {
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

  @ViewColumn( { name: "productGsfLocation" })
  productGsfLocation: string;

  @ViewColumn( { name: "productPosmvLocation" })
  productPosmvLocation: string;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
