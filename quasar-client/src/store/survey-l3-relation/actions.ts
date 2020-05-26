import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyL3RelationStateInterface } from './state'
import { ObservableProductRelationsApi, ObservableProductsL3SrcApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { getRestConfiguration } from 'src/boot/auth'
import { ProductL3SrcDto } from '@ausseabed/product-catalogue-rest-client'

const actions: ActionTree<SurveyL3RelationStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootState }, relationId: number) {
    const productRelationshipSrcApi = new ObservableProductRelationsApi(getRestConfiguration(rootState))

    const surveyL3Relation = await productRelationshipSrcApi.productRelationsControllerFindOneL3Survey(relationId).toPromise()
    // .catch(reason => { console.log('product not found | error') })

    commit('assignSurveyL3Relation', surveyL3Relation)
  },
  saveData ({ state, rootState }) {
    const productsL3SrcApi = new ObservableProductsL3SrcApi(getRestConfiguration(rootState))

    const productL3SrcDto = new ProductL3SrcDto()

    Object.assign(productL3SrcDto, state.surveyL3RelationSelected.productL3Src)
    productsL3SrcApi.productsL3SrcControllerUpdate(state.surveyL3RelationSelected.productL3Src.id, productL3SrcDto)
  }
}

export default actions