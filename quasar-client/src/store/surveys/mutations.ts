import { MutationTree } from 'vuex'
import { SurveyStateInterface } from './state'
import { Survey } from '@ausseabed/product-catalogue-rest-client'

const mutation: MutationTree<SurveyStateInterface> = {
  dataLoaded (state: SurveyStateInterface, payload: Survey[]) {
    state.surveys = payload
  },
  updateSurveys (state: SurveyStateInterface, payload: Survey[]) {
    payload.forEach(survey => {
      const match = state.surveys.find(haystack => haystack.id === survey.id)
      Object.assign(match, survey)
    })
    // state.surveys = payload
  },
  errorMessage (state: SurveyStateInterface, payload: any) {
    console.log(JSON.stringify(payload))
    state.errorMessages.push(payload)
  }
}

export default mutation
