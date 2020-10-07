/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Configuration } from '@ausseabed/product-catalogue-rest-client/configuration'
import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyL2RelationStateInterface } from './state'
import { ObservableProductRelationsApi, ObservableProductsL2SrcApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { ProductL2SrcDto, ProductL2Src } from '@ausseabed/product-catalogue-rest-client'

const actions: ActionTree<SurveyL2RelationStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootGetters, dispatch }, relationId: number) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const productRelationshipSrcApi = new ObservableProductRelationsApi(configuration)

    const surveyL2Relation = await productRelationshipSrcApi.productRelationsControllerFindOneL2Survey(relationId).toPromise().catch(
      (reason: undefined) => { commit('errorMessage', reason) })

    commit('assignSurveyL2Relation', surveyL2Relation)

    // Add the autofill stuff
    const productsL2SrcApi = new ObservableProductsL2SrcApi(configuration)
    productRelationshipSrcApi.productRelationsControllerFindAllL2Survey().toPromise().then(async relations => {
      const surveyMatches = relations.filter(relation => relation.relationId === relationId)
      if (surveyMatches.length > 0) {
        const siblingRelations = relations.filter(relation => relation.surveyId === surveyMatches[0].surveyId && relation.relationId !== relationId)
        if (siblingRelations.length > 0) {
          const siblingProducts:ProductL2Src[] = await Promise.all(
            siblingRelations.map(async sibling => {
              return productsL2SrcApi.productsL2SrcControllerFindOne(sibling.productId).toPromise()
            }))
          commit('createSuggestions', siblingProducts)
        }
      }
    })
      .catch(reason => {
        commit('errorMessage', reason)
      })
  },
  async saveData ({ commit, state, rootGetters, dispatch }) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const productsL2SrcApi = new ObservableProductsL2SrcApi(configuration)

    const productL2SrcDto = new ProductL2SrcDto()

    Object.assign(productL2SrcDto, state.surveyL2RelationSelected.productL2Src)
    return productsL2SrcApi.productsL2SrcControllerUpdate(state.surveyL2RelationSelected.productL2Src.id, productL2SrcDto).toPromise().catch(
      (reason: undefined) => { commit('errorMessage', reason) })
  }
}

export default actions
