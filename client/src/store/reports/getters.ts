import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { ReportsStateInterface } from './state'

const getters: GetterTree<ReportsStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
