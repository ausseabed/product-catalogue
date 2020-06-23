import { MutationTree } from 'vuex'
import { SurveyL3RelationStateInterface } from './state'
import { SurveyL3Relation } from '@ausseabed/product-catalogue-rest-client'
import { v4 as uuidv4 } from 'uuid'

export type UpdateProductKnownTypes = 'metadataPersistentId' | 'name' | 'productTifLocation' | 'resolution' | 'srs' | 'uuid'

const mutation: MutationTree<SurveyL3RelationStateInterface> = {
  assignSurveyL3Relation (state: SurveyL3RelationStateInterface, surveyRelation: SurveyL3Relation) {
    state.surveyL3RelationSelected = surveyRelation
  },
  createGuid (state: SurveyL3RelationStateInterface) {
    state.surveyL3RelationSelected.productL3Src.uuid = uuidv4()
  },
  updateProduct (state: SurveyL3RelationStateInterface, elementValuePair: { element: UpdateProductKnownTypes; value: string }) {
    state.surveyL3RelationSelected.productL3Src[elementValuePair.element] = elementValuePair.value
  },
  clearErrorMessagesMutation (state: SurveyL3RelationStateInterface) {
    while (state.errorMessages.length) { state.errorMessages.pop() }
  },
  errorMessage (state: SurveyL3RelationStateInterface, payload) {
    console.log(JSON.stringify(payload))
    state.errorMessages.push(payload)
  }
}

export default mutation
