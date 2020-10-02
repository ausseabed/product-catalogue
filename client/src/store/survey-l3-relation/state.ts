import { SurveyL3Relation } from '@ausseabed/product-catalogue-rest-client'

export interface SurveyL3RelationStateInterface {
  surveyL3RelationsList: SurveyL3Relation[];
  surveyL3RelationSelected: SurveyL3Relation;
  suggestions: {
    gazeteer: string[]
    resolution: string[]
    srs: string[]
    metadataPersistentId: string[]
  }
  errorMessages: string[];
}

const state: SurveyL3RelationStateInterface = {
  surveyL3RelationsList: [],
  surveyL3RelationSelected: new SurveyL3Relation(),
  errorMessages: [],
  suggestions: {
    gazeteer: [],
    resolution: [],
    srs: [],
    metadataPersistentId: []
  }
}

export default state
