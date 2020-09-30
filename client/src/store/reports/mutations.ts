import { MutationTree } from 'vuex'
import { ReportsStateInterface } from './state'
import { ProductL3Dist, ProductL3Src, Survey } from '@ausseabed/product-catalogue-rest-client'

const mutation: MutationTree<ReportsStateInterface> = {
  assignSurveys (state: ReportsStateInterface, surveys: [Survey]) {
    state.surveys = surveys
  },
  assignProductL3Src (state: ReportsStateInterface, productL3Srcs: [ProductL3Src]) {
    state.productL3Srcs = productL3Srcs
  },
  assignProductL3Dist (state: ReportsStateInterface, productL3Dists: [ProductL3Dist]) {
    state.productL3Dists = productL3Dists
  },
  clearAssign (state: ReportsStateInterface) {
    if (!state.fileExists) return
    state.fileExists.srcTifLocation.length = 0
    state.fileExists.bathymetryLocation.length = 0
    state.fileExists.hillshadeLocation.length = 0
    state.fileExists.l3CoverageLocation.length = 0
    state.polygonArea.length = 0
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
  },
  assignSrcExists (state: ReportsStateInterface, payload: { product: ProductL3Src; exists: boolean; }) {
    if (!state.fileExists) return

    state.fileExists.srcTifLocation.push({ product: payload.product, exists: payload.exists })
  },
  assignArea (state: ReportsStateInterface, payload: {productL3Dist: ProductL3Dist; areaKm2: number; lastModified: Date}) {
    state.polygonArea.push({ productL3Dist: payload.productL3Dist, area: payload.areaKm2, lastModified: payload.lastModified })
  }
}

export default mutation
