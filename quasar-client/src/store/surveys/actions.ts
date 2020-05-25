import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyStateInterface } from './state'
import { ObservableSurveysApi, ObservableProductRelationsApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'
import { getRestConfiguration } from 'src/boot/auth'
import { SurveyDto, Survey } from '@ausseabed/product-catalogue-rest-client'

export type UpdateRowKnownTypes = 'year' | 'uuid' | 'name'

export interface UpdateRowInterface {
  rowId: number;
  elementName: UpdateRowKnownTypes;
  elementValue: string;
}

const actions: ActionTree<SurveyStateInterface, StoreInterface> = {
  fetchData ({ commit, rootState }) {
    const surveyApi = new ObservableSurveysApi(getRestConfiguration(rootState))
    surveyApi.surveysControllerFindAll().toPromise().then((surveys) =>
      commit('dataLoaded', surveys))
      .catch(reason => {
        commit('errorMessage', reason)
      })

    const productRelationshipSrcApi = new ObservableProductRelationsApi(getRestConfiguration(rootState))

    productRelationshipSrcApi.productRelationsControllerFindAllL3Survey().toPromise().then((relations) =>
      commit('relationsLoaded', relations))
      .catch(reason => {
        commit('errorMessage', reason)
      })
  },
  newSurvey ({ commit, rootState }) {
    const surveyDto: SurveyDto = {
      name: '',
      uuid: '',
      year: ''
    }
    const surveyApi = new ObservableSurveysApi(getRestConfiguration(rootState))
    surveyApi.surveysControllerCreate(surveyDto).toPromise().then((newSurvey) => {
      commit('addNewSurvey', newSurvey)
    }
    ).catch(reason => {
      commit('errorMessage', reason)
    })
  },
  deleteSurvey ({ commit, rootState }, payload: Survey) {
    const surveyApi = new ObservableSurveysApi(getRestConfiguration(rootState))
    surveyApi.surveysControllerRemove(payload.id).toPromise().then(() => {
      commit('removeSurvey', payload)
    }
    ).catch(reason => {
      commit('errorMessage', reason)
    })
  },

  updateEntry ({ commit, state, rootState }, payload: UpdateRowInterface) {
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
    const configuration = getRestConfiguration(rootState)
    // const surveysApiRequestFactory = new SurveysApiRequestFactory(configuration)
    const surveyApi = new ObservableSurveysApi(configuration)
    commit('updateSurveys', [surveyClone])
    surveyApi.surveysControllerUpdate(payload.rowId, surveyDto).toPromise()
      .then(() => { // do nothing
      }, reason => {
        commit('errorMessage', reason)
      }).catch(reason => {
        commit('errorMessage', reason)
      })
  }
}

export default actions
