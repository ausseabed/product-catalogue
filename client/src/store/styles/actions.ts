/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { StylesStateInterface } from './state'
import { ObservableStylesApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'

import { Configuration } from '@ausseabed/product-catalogue-rest-client/configuration'

const actions: ActionTree<StylesStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootGetters, dispatch }) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const stylesApi = new ObservableStylesApi(configuration)

    stylesApi.stylesControllerFindAll().toPromise()
      .then((styles) => commit('dataLoaded', styles))
      .catch((error) => commit('errorMessage', error))
  }
}

export default actions
