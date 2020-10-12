import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { ReportsStateInterface } from './state'
import { ObservableSurveysApi, ObservableProductsL3DistApi, ObservableProductsL3SrcApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'

import { Configuration } from '@ausseabed/product-catalogue-rest-client/configuration'
import { S3Util } from 'src/lib/s3-util'
import { ProductL3Dist, ProductL3Src } from '@ausseabed/product-catalogue-rest-client'

import axios from 'axios'
import { Buffer } from 'buffer/'

// eslint-disable-next-line
const parseDBF = require('parsedbf')

const actions: ActionTree<ReportsStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootGetters, dispatch }) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const configuration = rootGetters['auth/configuration'] as Configuration

    const surveyApi = new ObservableSurveysApi(configuration)
    surveyApi.surveysControllerFindAll().toPromise().then((surveys) =>
      commit('assignSurveys', surveys))
      .catch(reason => {
        commit('errorMessage', reason)
      })

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
            commit('assignSrcExists', { key: 'srcTifLocation', product: productL3Src, exists: exists })
          } else {
            commit('assignSrcExists', { key: 'srcTifLocation', product: productL3Src, exists: false })
          }
        })),
      Promise.all(
        productsL3SrcAll.map(async (productL3Src: ProductL3Src) => {
          const uri = S3Util.getBucketFromS3Uri(productL3Src.productBagLocation)
          if (uri) {
            const exists = await S3Util.objectExists(uri, undefined, true)
            commit('assignSrcExists', { key: 'productBagLocation', product: productL3Src, exists: exists })
          } else {
            commit('assignSrcExists', { key: 'productBagLocation', product: productL3Src, exists: false })
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
          const uri = S3Util.getBucketFromS3Uri(productsL3Dist.bathymetryBagLocation)
          if (uri) {
            const exists = await S3Util.objectExists(uri, undefined, true)
            commit('assignExists', { key: 'bathymetryBagLocation', product: productsL3Dist, exists: exists })
          } else {
            commit('assignExists', { key: 'bathymetryBagLocation', product: productsL3Dist, exists: false })
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

            const uriBath = S3Util.getBucketFromS3Uri(productsL3Dist.bathymetryLocation)
            if (uriBath) {
              const lastModified = await S3Util.objectLastModified(uriBath, undefined)
              // Get Area from url
              const httpsurl = S3Util.getHttpsUrl(uri)
              const dbfUrl = httpsurl.replace('.shp', '.dbf')
              // eslint-disable-next-line
              axios.get(dbfUrl,{
                responseType: 'arraybuffer',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/dbf'
                }
              }).then(response => {
                const buffer = Buffer.from(response.data)
                // eslint-disable-next-line
              const parsedDBF = parseDBF(buffer)
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (parsedDBF.length > 0) {
                  // eslint-disable-next-line
                commit('assignArea', {productL3Dist: productsL3Dist, areaKm2: parsedDBF[0].area_km2, lastModified: lastModified})
                }
              })
            }
          } else {
            commit('assignExists', { key: 'l3CoverageLocation', product: productsL3Dist, exists: false })
          }
        }))
    ])
  }
}

export default actions
