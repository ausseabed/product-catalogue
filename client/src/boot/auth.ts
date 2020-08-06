import { boot } from 'quasar/wrappers'
import * as msal from '@azure/msal-browser'

// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default boot(({ router, store }) => {
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

  const msalInstance = new msal.PublicClientApplication(msalConfig)

  router.beforeEach((to, from, next) => {
    // var noAuth = true
    if (to.path === '/404' || to.path === '/' || to.path === '/health') { // allow not-found page to be shown
      next()
    } else { // try to get login information
      store.dispatch('auth/fetch', { msalInstance: msalInstance, clientIdStr: clientIdStr }).then(() => {
        console.log('hi')
        if (!store.getters['auth/loggedIn']) {
          console.log('hif')
          if (from.path !== '/') {
            router.push('/')
          }
        } else {
          console.log('hig')
          next()
        }
      })
    }
  })
})
