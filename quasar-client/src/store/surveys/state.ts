import { Survey } from '@ausseabed/product-catalogue-rest-client'
export interface SurveyStateInterface {
  surveys: Survey[];
}

const testSurvey = new Survey()
testSurvey.id = 1
testSurvey.name = 'fred'
testSurvey.uuid = '1'
testSurvey.year = '1991'

const surveyList: Survey[] = [testSurvey]
const state: SurveyStateInterface = {
  surveys: surveyList
}

export default state
