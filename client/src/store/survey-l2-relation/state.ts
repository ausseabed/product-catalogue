import { SurveyL2Relation } from '@ausseabed/product-catalogue-rest-client'

export interface SurveyL2RelationStateInterface {
  surveyL2RelationsList: SurveyL2Relation[];
  surveyL2RelationSelected: SurveyL2Relation;
  suggestions: {
    gazeteer: string[]
    srs: string[]
    metadataPersistentId: string[]
  }
  errorMessages: string[];
}

const state: SurveyL2RelationStateInterface = {
  surveyL2RelationsList: [],
  surveyL2RelationSelected: new SurveyL2Relation(),
  errorMessages: [],
  suggestions: {
    gazeteer: [],
    srs: [],
    metadataPersistentId: []
  }
}

export default state
