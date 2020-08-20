import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { ReportsStateInterface } from './state'
import { ObservableProductsL3DistApi, ObservableProductsL3SrcApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'

import { Configuration } from '@ausseabed/product-catalogue-rest-client/configuration'
import { S3Util } from 'src/lib/s3-util'
import { ProductL3Dist, ProductL3Src } from '@ausseabed/product-catalogue-rest-client'

const actions: ActionTree<ReportsStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootGetters, dispatch }) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const configuration = rootGetters['auth/configuration'] as Configuration

    const productsL3SrcApi = new ObservableProductsL3SrcApi(configuration)
    const productsL3SrcAll = await productsL3SrcApi.productsL3SrcControllerFindAll().toPromise().catch(
      (reason: undefined) => { commit('errorMessage', reason) })

    if (!productsL3SrcAll || productsL3SrcAll.length === 0) return

    commit('assignProductL3Src', productsL3SrcAll)

    const productsL3DistApi = new ObservableProductsL3DistApi(configuration)
    const productsL3Dists = await productsL3DistApi.productsL3DistControllerFindAll().toPromise().catch(
      (reason: undefined) => { commit('errorMessage', reason) })

    if (!productsL3Dists || productsL3Dists.length === 0) return

    commit('assignProductL3Dist', productsL3Dists)
    commit('clearAssign', productsL3Dists)

    await Promise.all([
      Promise.all(
        productsL3SrcAll.map(async (productL3Src: ProductL3Src) => {
          const uri = S3Util.getBucketFromS3Uri(productL3Src.productTifLocation)
          if (uri) {
            const exists = await S3Util.objectExists(uri, undefined, true)
            commit('assignSrcExists', { product: productL3Src, exists: exists })
          } else {
            commit('assignSrcExists', { product: productL3Src, exists: false })
          }
        })),
      Promise.all(
        productsL3Dists.map(async (productsL3Dist: ProductL3Dist) => {
          const uri = S3Util.getBucketFromS3Uri(productsL3Dist.bathymetryLocation)
          if (uri) {
            const exists = await S3Util.objectExists(uri, undefined, true)
            commit('assignExists', { key: 'bathymetryLocation', product: productsL3Dist, exists: exists })
          } else {
            commit('assignExists', { key: 'bathymetryLocation', product: productsL3Dist, exists: false })
          }
        })),
      Promise.all(
        productsL3Dists.map(async (productsL3Dist: ProductL3Dist) => {
          const uri = S3Util.getBucketFromS3Uri(productsL3Dist.hillshadeLocation)
          if (uri) {
            const exists = await S3Util.objectExists(uri, undefined, true)
            commit('assignExists', { key: 'hillshadeLocation', product: productsL3Dist, exists: exists })
          } else {
            commit('assignExists', { key: 'hillshadeLocation', product: productsL3Dist, exists: false })
          }
        })),
      Promise.all(
        productsL3Dists.map(async (productsL3Dist: ProductL3Dist) => {
          const uri = S3Util.getBucketFromS3Uri(productsL3Dist.l3CoverageLocation)
          if (uri) {
            const exists = await S3Util.objectExists(uri, undefined, true)
            commit('assignExists', { key: 'l3CoverageLocation', product: productsL3Dist, exists: exists })
          } else {
            commit('assignExists', { key: 'l3CoverageLocation', product: productsL3Dist, exists: false })
          }
        }))
    ])
  }
}

export default actions
