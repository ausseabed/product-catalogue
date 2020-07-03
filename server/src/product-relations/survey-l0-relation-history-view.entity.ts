import { Column, Entity, ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({name: "survey_l0_relation_with_history", expression: `SELECT * FROM "survey_l0_relation" UNION ALL SELECT * FROM "survey_l0_relation_history"`})
export class SurveyL0RelationHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "surveyId" })
  surveyId: number;

  @ViewColumn( { name: "productL0SrcId" })
  productL0SrcId: number;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
