import { boot } from 'quasar/wrappers'
import * as msal from '@azure/msal-browser'
import { StoreInterface } from 'src/store'
import { Store } from 'vuex'

let clientIdStr = ''
if (process && process.env && process.env.AUTH_CLIENT_ID) {
  clientIdStr = process.env.AUTH_CLIENT_ID
} else {
  throw new Error('AUTH_CLIENT_ID must be defined for authentication')
}
const msalConfig: msal.Configuration = {
  auth: {
    clientId: clientIdStr,
    authority: process.env.AUTH_HOST,
    redirectUri: window.location.origin
  },
  cache: {
    // cacheLocation: "sessionStorage",
    // storeAuthStateInCookie: true
  }
}
export const requestScopes = {
  scopes: [clientIdStr + '/.default']
  // scopes: [payload.clientIdStr],
  // scopes: ['api://' + process.env.AUTH_CLIENT_ID + '/Records.Remove']
}

export const msalInstance = new msal.PublicClientApplication(msalConfig)

// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default boot<Store<StoreInterface>>(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    // var noAuth = true
    if (to.path === '/404' || to.path === '/' || to.path === '/health') { // allow not-found page to be shown
      next()
    } else { // try to get login information
      store.dispatch('auth/fetch').then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (!store.getters['auth/loggedIn']) {
          if (from.path !== '/') {
            router.push('/').catch(
              (e) => { console.log(e) })
          }
        } else {
          next()
        }
      }).catch(
        (e) => { console.log(e) })
    }
  })
})
