import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { AuthStateInterface } from './state'

import { ConfigurationParameters, createConfiguration, Configuration } from '@ausseabed/product-catalogue-rest-client/configuration'
import { ServerConfiguration } from '@ausseabed/product-catalogue-rest-client'
const getters: GetterTree<AuthStateInterface, StoreInterface> = {
  loggedIn (state) {
    return state.account !== undefined // && state.bearerToken !== undefined
  },
  configuration (state): Configuration {
    const serverConfig = new ServerConfiguration('/rest', {})
    const configuration: ConfigurationParameters =
      {
        baseServer: serverConfig,
        authMethods: {
          'access-token': {
            tokenProvider: {
              getToken: () => { return state.bearerToken || '' }
            }
          }
        }
      }
    return createConfiguration(configuration)
  }
}

export default getters
