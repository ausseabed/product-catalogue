import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

import surveys from './surveys'
import { SurveyStateInterface } from './surveys/state'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  surveys: SurveyStateInterface;
  bearerToken: string;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      surveys
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
})
