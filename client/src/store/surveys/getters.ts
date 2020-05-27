import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyStateInterface } from './state'

const getters: GetterTree<SurveyStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
