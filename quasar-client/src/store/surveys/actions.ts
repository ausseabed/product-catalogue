import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { SurveyStateInterface } from './state'
import { Configuration } from '@ausseabed/product-catalogue-rest-client'
import { SurveysApiRequestFactory } from '@ausseabed/product-catalogue-rest-client/apis/SurveysApi'
import { ServerConfiguration } from '@ausseabed/product-catalogue-rest-client/servers'
import { ObservableSurveysApi } from '@ausseabed/product-catalogue-rest-client/types/ObservableAPI'

const actions: ActionTree<SurveyStateInterface, StoreInterface> = {
  async fetchData ({ commit, rootState }) {
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
    const surveys = await surveyApi.surveysControllerFindAll(configuration).toPromise()

    // const testSurvey = new Survey()
    // testSurvey.id = 1
    // testSurvey.name = 'geoff'
    // testSurvey.uuid = '1'
    // testSurvey.year = '1991'
    commit('dataLoaded', surveys)
  }
}

export default actions
