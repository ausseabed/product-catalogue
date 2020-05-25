import { Survey, RelationSummaryDto } from '@ausseabed/product-catalogue-rest-client'

export interface SurveyStateInterface {
  surveys: Survey[];
  productShortDescription: RelationSummaryDto[];
  errorMessages: string[];
}

const state: SurveyStateInterface = {
  surveys: [],
  productShortDescription: [],
  errorMessages: []
}

export default state
