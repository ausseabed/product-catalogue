import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyL3RelationStateInterface } from './state'

const getters: GetterTree<SurveyL3RelationStateInterface, StoreInterface> = {
  productPresentationString (state) {
    return state.surveyL3RelationSelected.survey.name
  }
}

export default getters
