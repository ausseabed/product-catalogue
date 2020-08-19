import { MutationTree } from 'vuex'
import { ReportsStateInterface } from './state'
import { ProductL3Dist } from '@ausseabed/product-catalogue-rest-client'

const mutation: MutationTree<ReportsStateInterface> = {
  assignProductL3Dist (state: ReportsStateInterface, productL3Dists: [ProductL3Dist]) {
    state.productL3Dists = productL3Dists
  },
  clearAssign (state: ReportsStateInterface) {
    if (!state.fileExists) return
    state.fileExists.bathymetryLocation.length = 0
    state.fileExists.hillshadeLocation.length = 0
    state.fileExists.l3CoverageLocation.length = 0
  },
  assignExists (state: ReportsStateInterface, payload: { key: string; product: ProductL3Dist; exists: boolean; }) {
    if (!state.fileExists) return

    if (payload.key === 'bathymetryLocation') {
      state.fileExists.bathymetryLocation.push({ product: payload.product, exists: payload.exists })
    } else if (payload.key === 'hillshadeLocation') {
      state.fileExists.hillshadeLocation.push({ product: payload.product, exists: payload.exists })
    } else if (payload.key === 'l3CoverageLocation') {
      state.fileExists.l3CoverageLocation.push({ product: payload.product, exists: payload.exists })
    }
  }
}

export default mutation
