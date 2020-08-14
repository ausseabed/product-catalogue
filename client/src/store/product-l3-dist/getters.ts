import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { ProductL3DistStateInterface } from './state'

const getters: GetterTree<ProductL3DistStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
