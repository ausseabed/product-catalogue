import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({name: "survey_l2_relation_with_history", expression: `SELECT * FROM "survey_l2_relation" UNION ALL SELECT * FROM "survey_l2_relation_history"`})
export class SurveyL2RelationHistoryView {
  @ViewColumn( { name: "id" })
  id: number;

  @ViewColumn( { name: "surveyId" })
  surveyId: number;

  @ViewColumn( { name: "productL2SrcId" })
  productL2SrcId: number;

  @ViewColumn( { name: "sysPeriod" })
  sysPeriod: any;
}
