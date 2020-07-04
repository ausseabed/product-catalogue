import { Column, Entity, ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({name: "survey_l3_relation_with_history", expression: `SELECT * FROM "survey_l3_relation" UNION ALL SELECT * FROM "survey_l3_relation_history"`})
export class SurveyL3RelationHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "surveyId" })
  surveyId: number;

  @ViewColumn( { name: "productL3SrcId" })
  productL3SrcId: number;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
