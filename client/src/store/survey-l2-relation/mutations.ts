import { MutationTree } from 'vuex'
import { SurveyL2RelationStateInterface } from './state'
import { SurveyL2Relation, ProductL2Src } from '@ausseabed/product-catalogue-rest-client'
import { v4 as uuidv4 } from 'uuid'

export type UpdateProductKnownTypes = 'metadataPersistentId' | 'name' | 'productGsfLocation' | 'productPosmvLocation' | 'srs' | 'uuid'

const mutation: MutationTree<SurveyL2RelationStateInterface> = {
  assignSurveyL2Relation (state: SurveyL2RelationStateInterface, surveyRelation: SurveyL2Relation) {
    state.surveyL2RelationSelected = surveyRelation
  },
  createGuid (state: SurveyL2RelationStateInterface) {
    state.surveyL2RelationSelected.productL2Src.uuid = uuidv4()
  },
  updateProduct (state: SurveyL2RelationStateInterface, elementValuePair: { element: UpdateProductKnownTypes; value: string }) {
    state.surveyL2RelationSelected.productL2Src[elementValuePair.element] = elementValuePair.value.trim()
  },
  clearErrorMessagesMutation (state: SurveyL2RelationStateInterface) {
    while (state.errorMessages.length) { state.errorMessages.pop() }
  },
  // Create suggestions from sibling products in a survey
  createSuggestions (state: SurveyL2RelationStateInterface, payload: ProductL2Src[]) {
    state.suggestions.gazeteer.length = 0
    state.suggestions.metadataPersistentId.length = 0
    state.suggestions.srs.length = 0
    payload.forEach(product => {
      state.suggestions.gazeteer.push(product.name)
      state.suggestions.metadataPersistentId.push(product.metadataPersistentId)
      state.suggestions.srs.push(product.srs)
    })
  },
  errorMessage (state: SurveyL2RelationStateInterface, payload) {
    console.log(JSON.stringify(payload))
    state.errorMessages.push(payload)
  }
}

export default mutation
