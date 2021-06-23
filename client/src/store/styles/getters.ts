import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { StylesStateInterface } from './state'

const getters: GetterTree<StylesStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
