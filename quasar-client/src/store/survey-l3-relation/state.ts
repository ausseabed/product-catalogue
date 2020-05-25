import { SurveyL3Relation } from '@ausseabed/product-catalogue-rest-client'

export interface SurveyL3RelationStateInterface {
  surveyL3RelationsList: SurveyL3Relation[];
  surveyL3RelationSelected: SurveyL3Relation;
  errorMessages: string[];
}

const state: SurveyL3RelationStateInterface = {
  surveyL3RelationsList: [],
  surveyL3RelationSelected: new SurveyL3Relation(),
  errorMessages: []
}

export default state
