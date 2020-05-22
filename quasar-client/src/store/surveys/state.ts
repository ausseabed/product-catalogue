import { Survey } from '@ausseabed/product-catalogue-rest-client'
export interface SurveyStateInterface {
  surveys: Survey[];
}

let surveyList: Survey[] = []
const state: SurveyStateInterface = {
  surveys: surveyList
}

export default state