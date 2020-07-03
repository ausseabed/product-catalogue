import { Column, Entity, ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({name: "compilation_l3_relation_with_history", expression: `SELECT * FROM "compilation_l3_relation" UNION ALL SELECT * FROM "compilation_l3_relation_history"`})
export class CompilationL3RelationHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "compilationId" })
  compilationId: number;

  @ViewColumn( { name: "productL3SrcId" })
  productL3SrcId: number;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
