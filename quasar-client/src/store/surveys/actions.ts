import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyStateInterface } from './state'
import { Survey } from '@ausseabed/product-catalogue-rest-client'

const actions: ActionTree<SurveyStateInterface, StoreInterface> = {
  fetchData ({ commit }) {
    const testSurvey = new Survey()
    testSurvey.id = 1
    testSurvey.name = 'geoff'
    testSurvey.uuid = '1'
    testSurvey.year = '1991'
    commit('dataLoaded', [testSurvey])
  }
}

export default actions
