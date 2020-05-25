import { MutationTree } from 'vuex'
import { SurveyL3RelationStateInterface } from './state'
import { SurveyL3Relation } from '@ausseabed/product-catalogue-rest-client'
import { v4 as uuidv4 } from 'uuid'

const mutation: MutationTree<SurveyL3RelationStateInterface> = {
  assignSurveyL3Relation (state: SurveyL3RelationStateInterface, payload: SurveyL3Relation) {
    state.surveyL3RelationSelected = payload
  },
  createGuid (state: SurveyL3RelationStateInterface) {
    state.surveyL3RelationSelected.productL3Src.uuid = uuidv4()
  }
}

export default mutation
