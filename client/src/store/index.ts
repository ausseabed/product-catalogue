import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

import auth from './auth'
import surveys from './surveys'
import surveyl3relation from './survey-l3-relation'
import surveyl2relation from './survey-l2-relation'
import productl3dist from './product-l3-dist'
import reports from './reports'
import { SurveyStateInterface } from './surveys/state'
import { SurveyL3RelationStateInterface } from './survey-l3-relation/state'
import { SurveyL2RelationStateInterface } from './survey-l2-relation/state'
import { AuthStateInterface } from './auth/state'
import { ProductL3DistStateInterface } from './product-l3-dist/state'
import { ReportsStateInterface } from './reports/state'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  surveyStore: SurveyStateInterface;
  surveyL3RelationStore: SurveyL3RelationStateInterface;
  surveyL2RelationStore: SurveyL2RelationStateInterface;
  authStore: AuthStateInterface;
  productL3DistStore: ProductL3DistStateInterface;
  reportsStore: ReportsStateInterface;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      auth,
      reports,
      surveys,
      surveyl2relation,
      surveyl3relation,
      productl3dist
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
})
