import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { AuthStateInterface } from './state'
import { AccountInfo, SilentRequest, InteractionRequiredAuthError } from '@azure/msal-browser'
import { msalInstance, requestScopes } from '../../boot/auth'

const actions: ActionTree<AuthStateInterface, StoreInterface> = {
  async getLoginToken ({ commit, state }) {
    if (!state.account) {
      console.log('No account')
      return
    }
    const requestAccountScopes: SilentRequest = {
      scopes: requestScopes.scopes,
      account: state.account
    }

    await msalInstance.acquireTokenSilent(requestAccountScopes).then(tokenResponse => {
      // Do something with the tokenResponse
      console.log(`Token exires on ${tokenResponse.expiresOn}`)
      commit('setToken', tokenResponse.accessToken)
    }).catch(error => {
      if (error instanceof InteractionRequiredAuthError) {
      // fallback to interaction when silent call fails
        msalInstance.acquireTokenPopup(requestScopes).then(tokenResponse => {
          commit('setToken', tokenResponse.accessToken)
        }
        ).catch(error => {
          console.log(error)
        })
      }
    }).catch(error => {
      console.log(error)
    })
  },
  async logout ({ commit }) {
    commit('setToken', undefined)
    commit('setAccount', undefined)
    return await msalInstance.logout()
  },
  async fetch ({ commit, dispatch }) {
    const currentAccounts = msalInstance.getAllAccounts()
    if (currentAccounts.length >= 1 && currentAccounts[0]) {
      // Note, there could be a need to choose accounts if there is more than one
      const account = currentAccounts[0]
      commit('setAccount', account)
      return dispatch('getLoginToken')
    } else {
      return await msalInstance.loginPopup(requestScopes).then(
        async resp => {
          let account: AccountInfo | undefined

          if (resp !== null) {
            account = resp.account
          } else {
            const currentAccounts = msalInstance.getAllAccounts()
            if (!currentAccounts || currentAccounts.length < 1) {
            // signIn('loginRedirect')
              return
            } else if (currentAccounts.length >= 1) {
            // Note, there could be a need to choose accounts if there is more than one
              account = currentAccounts[0]
            }
          }
          commit('setAccount', account)
          if (account === undefined) {
            return
          }
          return dispatch('getLoginToken')
        }
      ).catch(function (error) {
        console.log(error)
      })
    }
  }
}

export default actions
