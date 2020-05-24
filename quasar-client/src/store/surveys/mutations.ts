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
  errorMessage (state: SurveyStateInterface, payload) {
    console.log(JSON.stringify(payload))
    state.errorMessages.push(payload)
  },
  addNewSurvey (state: SurveyStateInterface, payload: Survey) {
    state.surveys.push(payload)
  },
  removeSurvey (state: SurveyStateInterface, payload: Survey) {
    const index = state.surveys.findIndex(haystack => haystack.id === payload.id)
    if (index > -1) {
      state.surveys.splice(index, 1)
    } else {
      state.errorMessages.push('Removed element was not found in list')
    }
  }
}

export default mutation
