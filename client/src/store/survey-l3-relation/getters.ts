import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyL3RelationStateInterface } from './state'
import { PortalNaming } from '../../lib/portal_naming'

const getters: GetterTree<SurveyL3RelationStateInterface, StoreInterface> = {
  productPresentationString (state): string {
    return PortalNaming.getNameIndividual(state.surveyL3RelationSelected.productL3Src, state.surveyL3RelationSelected.survey.year)
  },
  surveyPresentationString (state): string {
    return PortalNaming.getNameSurvey(state.surveyL3RelationSelected.survey, state.surveyL3RelationSelected.productL3Src, state.surveyL3RelationSelected.survey.year)
  }
}

export default getters
