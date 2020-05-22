import { MutationTree } from 'vuex'
import { SurveyStateInterface } from './state'
import { Survey } from '@ausseabed/product-catalogue-rest-client'

const mutation: MutationTree<SurveyStateInterface> = {
  dataLoaded (state: SurveyStateInterface, payload: Survey[]) {
    state.surveys = payload
  }
}

export default mutation
