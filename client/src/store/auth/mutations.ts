import { MutationTree } from 'vuex'
import { AuthStateInterface } from './state'
import * as msal from '@azure/msal-browser'

const mutation: MutationTree<AuthStateInterface> = {
  setUser (state: AuthStateInterface, user: string) {
    state.user = user
  },

  setToken (state: AuthStateInterface, bearerToken: string) {
    state.bearerToken = bearerToken
  },

  setMsalInstance (state: AuthStateInterface, msalInstance: msal.PublicClientApplication) {
    state.msalInstance = msalInstance
  }
}

export default mutation
