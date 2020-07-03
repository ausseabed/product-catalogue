import { Column, Entity, ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({name: "compilation_with_history", expression: `SELECT * FROM "compilation" UNION ALL SELECT * FROM "compilation_history"`})
export class CompilationHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "uuid" })
  uuid: string;

  @ViewColumn( { name: "name" })
  name: string;

  @ViewColumn( { name: "year" })
  year: string;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
