import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { ProductL3DistStateInterface } from './state'
import { ObservableProductsL3DistApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'

const actions: ActionTree<ProductL3DistStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootGetters, dispatch }, productSrcId: number) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration']
    const productsL3DistApi = new ObservableProductsL3DistApi(configuration)

    const productsL3Dist = await productsL3DistApi.productsL3DistControllerFindAll(productSrcId).toPromise().catch(
      (reason: undefined) => { commit('errorMessage', reason) })

    console.log(productsL3Dist)
    if (productsL3Dist && productsL3Dist.length > 0) {
      commit('assignProductL3Dist', productsL3Dist[0])
    }
  }
}

export default actions
