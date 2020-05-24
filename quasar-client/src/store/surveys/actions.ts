import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyStateInterface } from './state'
import { Configuration, Survey, SurveyDto } from '@ausseabed/product-catalogue-rest-client'
import { SurveysApiRequestFactory } from '@ausseabed/product-catalogue-rest-client/apis/SurveysApi'
import { ServerConfiguration } from '@ausseabed/product-catalogue-rest-client/servers'
import { ObservableSurveysApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'

export type UpdateRowKnownTypes = 'year' | 'uuid' | 'name'

export interface UpdateRowInterface {
  rowId: number;
  elementName: UpdateRowKnownTypes;
  elementValue: string;
}

const actions: ActionTree<SurveyStateInterface, StoreInterface> = {
  fetchData ({ commit, rootState }) {
    const serverConfig = new ServerConfiguration('http://localhost:3001/api', {})

    const configuration = new Configuration(
      {
        baseServer: serverConfig,
        authMethods: {
          'access-token': {
            token: rootState.bearerToken
          }
        }
      }
    )

    const surveysApiRequestFactory = new SurveysApiRequestFactory(configuration)
    const surveyApi = new ObservableSurveysApi(configuration, surveysApiRequestFactory)
    surveyApi.surveysControllerFindAll(configuration).toPromise().then((surveys) =>
      commit('dataLoaded', surveys))
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
    const serverConfig = new ServerConfiguration('http://localhost:3001/api', {})

    const configuration = new Configuration(
      {
        baseServer: serverConfig,
        authMethods: {
          'access-token': {
            token: rootState.bearerToken
          }
        }
      }
    )

    const surveysApiRequestFactory = new SurveysApiRequestFactory(configuration)
    const surveyApi = new ObservableSurveysApi(configuration, surveysApiRequestFactory)
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
