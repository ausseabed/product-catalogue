/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Configuration } from '@ausseabed/product-catalogue-rest-client/configuration'
import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyL3RelationStateInterface } from './state'
import { ObservableProductRelationsApi, ObservableProductsL3SrcApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { ProductL3SrcDto, ProductL3Src } from '@ausseabed/product-catalogue-rest-client'

const actions: ActionTree<SurveyL3RelationStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootGetters, dispatch }, relationId: number) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const productRelationshipSrcApi = new ObservableProductRelationsApi(configuration)

    const surveyL3Relation = await productRelationshipSrcApi.productRelationsControllerFindOneL3Survey(relationId).toPromise().catch(
      (reason: undefined) => { commit('errorMessage', reason) })

    commit('assignSurveyL3Relation', surveyL3Relation)

    // Add the autofill stuff
    const productsL3SrcApi = new ObservableProductsL3SrcApi(configuration)
    productRelationshipSrcApi.productRelationsControllerFindAllL3Survey().toPromise().then(async relations => {
      const surveyMatches = relations.filter(relation => relation.relationId === relationId)
      if (surveyMatches.length > 0) {
        const siblingRelations = relations.filter(relation => relation.surveyId === surveyMatches[0].surveyId && relation.relationId !== relationId)
        if (siblingRelations.length > 0) {
          const siblingProducts:ProductL3Src[] = await Promise.all(
            siblingRelations.map(async sibling => {
              return productsL3SrcApi.productsL3SrcControllerFindOne(sibling.productId).toPromise()
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
    const productsL3SrcApi = new ObservableProductsL3SrcApi(configuration)

    const productL3SrcDto = new ProductL3SrcDto()

    Object.assign(productL3SrcDto, state.surveyL3RelationSelected.productL3Src)
    return productsL3SrcApi.productsL3SrcControllerUpdate(state.surveyL3RelationSelected.productL3Src.id, productL3SrcDto).toPromise().catch(
      (reason: undefined) => { commit('errorMessage', reason) })
  }
}

export default actions
