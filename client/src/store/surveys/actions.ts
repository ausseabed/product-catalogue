/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyStateInterface } from './state'
import { ObservableSurveysApi, ObservableProductRelationsApi, ObservableProductsL3SrcApi, ObservableProductsL2SrcApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { SurveyDto, Survey, ProductL3SrcDto, SurveyL3RelationDto, ProductL2SrcDto, SurveyL2RelationDto } from '@ausseabed/product-catalogue-rest-client'
import { v4 as uuidv4 } from 'uuid'

import { Configuration } from '@ausseabed/product-catalogue-rest-client/configuration'

export type UpdateRowKnownTypes = 'year' | 'uuid' | 'name'

export interface UpdateRowInterface {
  rowId: number;
  elementName: UpdateRowKnownTypes;
  elementValue: string;
}

const actions: ActionTree<SurveyStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootGetters, dispatch }) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const surveyApi = new ObservableSurveysApi(configuration)
    surveyApi.surveysControllerFindAll().toPromise().then((surveys) =>
      commit('dataLoaded', surveys))
      .catch(reason => {
        commit('errorMessage', reason)
      })

    const productRelationshipSrcApi = new ObservableProductRelationsApi(configuration)

    productRelationshipSrcApi.productRelationsControllerFindAllL3Survey().toPromise().then((relations) =>
      commit('relationsLoadedL3', relations))
      .catch(reason => {
        commit('errorMessage', reason)
      })

    productRelationshipSrcApi.productRelationsControllerFindAllL2Survey().toPromise().then((relations) =>
      commit('relationsLoadedL2', relations))
      .catch(reason => {
        commit('errorMessage', reason)
      })
  },
  async newSurvey ({ commit, rootGetters, dispatch }) {
    const surveyDto: SurveyDto = {
      name: '',
      uuid: '',
      year: ''
    }
    console.log(surveyDto)
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const surveyApi = new ObservableSurveysApi(configuration)
    return await surveyApi.surveysControllerCreate(surveyDto).toPromise().then((newSurvey) => {
      commit('addNewSurvey', newSurvey)
      return newSurvey
    }
    ).catch(reason => {
      commit('errorMessage', reason)
    })
  },
  async deleteSurvey ({ commit, rootGetters, dispatch }, payload: Survey) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const surveyApi = new ObservableSurveysApi(configuration)
    surveyApi.surveysControllerRemove(payload.id).toPromise().then(() => {
      commit('removeSurvey', payload)
    }
    ).catch(reason => {
      commit('errorMessage', reason)
    })
  },

  async updateEntry ({ commit, state, rootGetters, dispatch }, payload: UpdateRowInterface) {
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
    surveyDto[payload.elementName] = payload.elementValue.trim()
    surveyClone[payload.elementName] = payload.elementValue.trim()
    // const surveysApiRequestFactory = new SurveysApiRequestFactory(configuration)
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
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
  async createProductL3 ({ rootGetters, dispatch }, surveyId: number): Promise<number> {
    const dto: ProductL3SrcDto = {
      metadataPersistentId: '',
      name: '',
      productTifLocation: '',
      productBagLocation: '',
      resolution: '',
      srs: '',
      verticalDatum: 'Unknown',
      uuid: uuidv4().toString()
    }
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
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
  async createProductL2 ({ rootGetters, dispatch }, surveyId: number): Promise<number> {
    const dto: ProductL2SrcDto = {
      metadataPersistentId: '',
      name: '',
      productGsfLocation: '',
      productPosmvLocation: '',
      srs: '',
      verticalDatum: 'Unknown',
      uuid: uuidv4().toString()
    }
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const productsL2SrcApi = new ObservableProductsL2SrcApi(configuration)
    const productRelationshipSrcApi = new ObservableProductRelationsApi(configuration)

    const l2Product = await productsL2SrcApi.productsL2SrcControllerCreate(dto).toPromise()

    const relationDto: SurveyL2RelationDto = {
      survey: surveyId,
      productL2Src: l2Product.id
    }
    const surveyL2Relation = await productRelationshipSrcApi.productRelationsControllerCreateL2Survey(relationDto).toPromise()
    console.log(surveyL2Relation)
    return surveyL2Relation.id
  },
  async deleteProduct ({ commit, rootGetters, dispatch }, productId: number) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const productsL3SrcApi = new ObservableProductsL3SrcApi(configuration)
    productsL3SrcApi.productsL3SrcControllerDelete(productId).toPromise().then(() => {
      commit('removeProductL3', productId)
    }, reason => {
      commit('errorMessage', reason)
    }).catch(reason => {
      commit('errorMessage', reason)
    })
  },
  async deleteProductL2 ({ commit, rootGetters, dispatch }, productId: number) {
    await dispatch('auth/getLoginToken', {}, { root: true })
    const configuration = rootGetters['auth/configuration'] as Configuration
    const productsL2SrcApi = new ObservableProductsL2SrcApi(configuration)
    productsL2SrcApi.productsL2SrcControllerDelete(productId).toPromise().then(() => {
      commit('removeProductL2', productId)
    }, reason => {
      commit('errorMessage', reason)
    }).catch(reason => {
      commit('errorMessage', reason)
    })
  }

}

export default actions
