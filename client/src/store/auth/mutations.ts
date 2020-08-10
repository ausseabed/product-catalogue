import { MutationTree } from 'vuex'
import { AuthStateInterface } from './state'

import { AccountInfo } from '@azure/msal-browser'
const mutation: MutationTree<AuthStateInterface> = {
  setAccount (state: AuthStateInterface, account: AccountInfo) {
    state.account = account
  },

  setToken (state: AuthStateInterface, bearerToken: string) {
    state.bearerToken = bearerToken
  }
}

export default mutation
