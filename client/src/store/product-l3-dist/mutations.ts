import { MutationTree } from 'vuex'
import { ProductL3DistStateInterface } from './state'
import { ProductL3Dist } from '@ausseabed/product-catalogue-rest-client'

const mutation: MutationTree<ProductL3DistStateInterface> = {
  assignProductL3Dist (state: ProductL3DistStateInterface, productL3Dist: ProductL3Dist) {
    state.productL3Dist = productL3Dist
  },
  clearL3Dist (state: ProductL3DistStateInterface) {
    state.productL3Dist = undefined
  }
}

export default mutation
