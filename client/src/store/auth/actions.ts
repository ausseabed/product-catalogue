import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { AuthStateInterface } from './state'
import * as msal from '@azure/msal-browser'

const actions: ActionTree<AuthStateInterface, StoreInterface> = {
  login ({ commit, rootState }) {
    // do nothing
  },
  logout ({ commit, state }) {
    // do nothing
    if (state.msalInstance) {
      state.msalInstance.logout()
    }
  },
  async fetch ({ commit, rootState }, payload: {msalInstance: msal.PublicClientApplication; clientIdStr: string}) {
    const requestScopes = {
      scopes: [payload.clientIdStr + '/.default']
      // scopes: [payload.clientIdStr],
      // scopes: ['api://' + process.env.AUTH_CLIENT_ID + '/Records.Remove']
    }
    return await payload.msalInstance.loginPopup(requestScopes).then(
      async resp => {
        let user = ''
        let account: msal.AccountInfo | undefined

        if (resp !== null) {
          user = resp.account.username
          account = resp.account
        } else {
          const currentAccounts = payload.msalInstance.getAllAccounts()
          if (!currentAccounts || currentAccounts.length < 1) {
            // signIn('loginRedirect')
            return
          } else if (currentAccounts.length >= 1) {
            // Note, there could be a need to choose accounts if there is more than one
            user = currentAccounts[0].username
            account = currentAccounts[0]
          }
        }
        commit('setUser', user)
        if (account === undefined) {
          return
        }

        const requestAccountScopes = {
          scopes: requestScopes.scopes,
          account: account
        }

        await payload.msalInstance.acquireTokenSilent(requestAccountScopes).then(tokenResponse => {
          // Do something with the tokenResponse
          commit('setToken', tokenResponse.accessToken)
        }).catch(error => {
          if (error instanceof msal.InteractionRequiredAuthError) {
            // fallback to interaction when silent call fails
            payload.msalInstance.acquireTokenPopup(requestScopes).then(tokenResponse => {
              commit('setToken', tokenResponse.accessToken)
            }
            ).catch(error => {
              console.log(error)
            })
          }
        }).catch(error => {
          console.log(error)
        })
      }
    ).catch(function (error) {
      console.log(error)
    })
  }
}

export default actions
