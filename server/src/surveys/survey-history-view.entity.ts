import { Column, Entity, ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({ 
  name: "survey_with_history",
    expression: `SELECT * FROM "survey" UNION ALL SELECT * FROM "survey_history"`
})
export class SurveyHistoryView {
  @ViewColumn({ name: "id" })
  id: number;

  @ViewColumn({ name: "uuid" })
  uuid: string;

  @ViewColumn({ name: "name" })
  name: string;

  @ViewColumn({ name: "year" })
  year: string;

  @ViewColumn({ name: "sysPeriod" })
  sysPeriod: any;
}
