import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyL3RelationStateInterface } from './state'
import { ObservableProductRelationsApi, ObservableProductsL3SrcApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { getRestConfiguration } from 'src/boot/auth'
import { ProductL3SrcDto, SurveyL3RelationDto, SurveyL3Relation } from '@ausseabed/product-catalogue-rest-client'
// import { SurveyDto, Survey } from '@ausseabed/product-catalogue-rest-client'

const actions: ActionTree<SurveyL3RelationStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootState }, payload: number) {
    const productRelationshipSrcApi = new ObservableProductRelationsApi(getRestConfiguration(rootState))
    const productsL3SrcApi = new ObservableProductsL3SrcApi(getRestConfiguration(rootState))

    let surveyL3Relation: SurveyL3Relation

    surveyL3Relation = await productRelationshipSrcApi.productRelationsControllerFindConditionalL3Survey(payload).toPromise()
    // .catch(reason => { console.log('product not found | error') })

    if (!surveyL3Relation) {
      const dto: ProductL3SrcDto = {
        metadataPersistentId: '',
        name: '',
        productTifLocation: '',
        resolution: '',
        srs: '',
        uuid: ''
      }

      const l3Product = await productsL3SrcApi.productsL3SrcControllerCreate(dto).toPromise()

      const relationDto: SurveyL3RelationDto = {
        survey: payload,
        productL3Src: l3Product.id
      }
      surveyL3Relation = await productRelationshipSrcApi.productRelationsControllerCreateL3Survey(relationDto).toPromise()
    }

    console.log(surveyL3Relation)
    commit('assignSurveyL3Relation', surveyL3Relation)
  }
}

export default actions
