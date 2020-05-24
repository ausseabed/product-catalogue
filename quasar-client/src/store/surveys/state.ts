import { Survey } from '@ausseabed/product-catalogue-rest-client'

export interface SurveyStateInterface {
  surveys: Survey[];
  errorMessages: string[];
}

const surveyList: Survey[] = []
const state: SurveyStateInterface = {
  surveys: surveyList,
  errorMessages: []
}

export default state
