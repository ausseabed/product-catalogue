import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyStateInterface } from './state'

const actions: ActionTree<SurveyStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default actions
