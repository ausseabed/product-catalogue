import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyStateInterface } from './state'
import { ObservableSurveysApi, ObservableProductRelationsApi, ObservableProductsL3SrcApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { SurveyDto, Survey, ProductL3SrcDto, SurveyL3RelationDto } from '@ausseabed/product-catalogue-rest-client'

export type UpdateRowKnownTypes = 'year' | 'uuid' | 'name'

export interface UpdateRowInterface {
  rowId: number;
  elementName: UpdateRowKnownTypes;
  elementValue: string;
}

const actions: ActionTree<SurveyStateInterface, StoreInterface> = {
  fetchData ({ commit, rootState, rootGetters }) {
    const configuration = rootGetters['auth/configuration']
    const surveyApi = new ObservableSurveysApi(configuration)
    surveyApi.surveysControllerFindAll().toPromise().then((surveys) =>
      commit('dataLoaded', surveys))
      .catch(reason => {
        commit('errorMessage', reason)
      })

    const productRelationshipSrcApi = new ObservableProductRelationsApi(configuration)

    productRelationshipSrcApi.productRelationsControllerFindAllL3Survey().toPromise().then((relations) =>
      commit('relationsLoaded', relations))
      .catch(reason => {
        commit('errorMessage', reason)
      })
  },
  async newSurvey ({ commit, rootState, rootGetters }) {
    const surveyDto: SurveyDto = {
      name: '',
      uuid: '',
      year: ''
    }
    const configuration = rootGetters['auth/configuration']
    const surveyApi = new ObservableSurveysApi(configuration)
    return await surveyApi.surveysControllerCreate(surveyDto).toPromise().then((newSurvey) => {
      commit('addNewSurvey', newSurvey)
      return newSurvey
    }
    ).catch(reason => {
      commit('errorMessage', reason)
    })
  },
  deleteSurvey ({ commit, rootState, rootGetters }, payload: Survey) {
    const configuration = rootGetters['auth/configuration']
    const surveyApi = new ObservableSurveysApi(configuration)
    surveyApi.surveysControllerRemove(payload.id).toPromise().then(() => {
      commit('removeSurvey', payload)
    }
    ).catch(reason => {
      commit('errorMessage', reason)
    })
  },

  updateEntry ({ commit, state, rootState, rootGetters }, payload: UpdateRowInterface) {
    console.log(`payload '${payload.rowId}' '${payload.elementName}' '${payload.elementValue}'`)
    const survey: Survey | undefined = state.surveys.find(surv => surv.id === payload.rowId)
    if (!survey) {
      throw new Error(`could not find survey for index ${payload.rowId}`)
    }
    const surveyClone = Object.assign({}, survey)
    const surveyDto: SurveyDto = {
      name: survey.name,
      uuid: survey.uuid,
      year: survey.year
    }
    surveyDto[payload.elementName] = payload.elementValue
    surveyClone[payload.elementName] = payload.elementValue
    // const surveysApiRequestFactory = new SurveysApiRequestFactory(configuration)
    const configuration = rootGetters['auth/configuration']
    const surveyApi = new ObservableSurveysApi(configuration)
    commit('updateSurveys', [surveyClone])
    surveyApi.surveysControllerUpdate(payload.rowId, surveyDto).toPromise()
      .then(() => { // do nothing
      }, reason => {
        commit('errorMessage', reason)
      }).catch(reason => {
        commit('errorMessage', reason)
      })
  },
  async createProduct ({ rootState, rootGetters }, surveyId: number): Promise<number> {
    const dto: ProductL3SrcDto = {
      metadataPersistentId: '',
      name: '',
      productTifLocation: '',
      resolution: '',
      srs: '',
      uuid: ''
    }
    const configuration = rootGetters['auth/configuration']
    const productsL3SrcApi = new ObservableProductsL3SrcApi(configuration)
    const productRelationshipSrcApi = new ObservableProductRelationsApi(configuration)

    const l3Product = await productsL3SrcApi.productsL3SrcControllerCreate(dto).toPromise()

    const relationDto: SurveyL3RelationDto = {
      survey: surveyId,
      productL3Src: l3Product.id
    }
    const surveyL3Relation = await productRelationshipSrcApi.productRelationsControllerCreateL3Survey(relationDto).toPromise()
    console.log(surveyL3Relation)
    return surveyL3Relation.id
  },
  deleteProduct ({ commit, rootState, rootGetters }, productId: number) {
    const configuration = rootGetters['auth/configuration']
    const productsL3SrcApi = new ObservableProductsL3SrcApi(configuration)
    productsL3SrcApi.productsL3SrcControllerDelete(productId).toPromise().then(() => {
      commit('removeProduct', productId)
    }, reason => {
      commit('errorMessage', reason)
    }).catch(reason => {
      commit('errorMessage', reason)
    })
  }

}

export default actions
