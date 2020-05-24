import { Survey } from '@ausseabed/product-catalogue-rest-client'

export interface SurveyStateInterface {
  surveys: Survey[];
  errorMessages: string[];
}

// export interface SurveyRelationshipInterface {
//   survey: Survey;
//   l0relationships: [SurveyL0Relation];
//   l3relationships: [SurveyL3Relation];
// }

const surveyList: Survey[] = []
const state: SurveyStateInterface = {
  surveys: surveyList,
  errorMessages: []
}

export default state
