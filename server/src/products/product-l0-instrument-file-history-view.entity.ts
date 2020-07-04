import { Column, Entity, ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({name: "product_l0_instrument_file_with_history", expression: `SELECT * FROM "product_l0_instrument_file" UNION ALL SELECT * FROM "product_l0_instrument_file_history"`})
export class ProductL0InstrumentFileHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "l0InstrumentFile" })
  l0InstrumentFile: string;

  @ViewColumn( { name: "productL0DistId" })
  productL0DistId: number;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
