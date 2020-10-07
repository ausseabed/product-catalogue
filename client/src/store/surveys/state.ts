import { Survey, RelationSummaryDto } from '@ausseabed/product-catalogue-rest-client'

export interface SurveyStateInterface {
  surveys: Survey[];
  productShortDescription: RelationSummaryDto[];
  productShortDescriptionL2: RelationSummaryDto[];
  errorMessages: string[];
}

const state: SurveyStateInterface = {
  surveys: [],
  productShortDescription: [],
  productShortDescriptionL2: [],
  errorMessages: []
}

export default state
