import * as msal from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: process.env.AUTH_CLIENT_ID,
    authority: process.env.AUTH_HOST,
    redirectUri: window.location.origin
  }
}

const msalInstance = new msal.PublicClientApplication(msalConfig)

export async function login () {
  var account = msalInstance.getAccount()
  if (account !== null && account !== undefined) {
    return account
  } else {
    await msalInstance.loginPopup({})
      .then(_ => {
        var account = msalInstance.getAccount()
        return account
      })
      .catch(err => { // e.g. popup blocked, user declined to consent to access the app
        console.error('error: ' + err)
        return null
      })
  }
}

// "async" is optional
export default ({ app, router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    if (to.path === '/404') { // allow not-found page to be shown
      next()
    } else { // try to get login information
      login().then(account => {
        if (account !== null && account !== undefined) {
          console.log(account)
          store.state.userName = account.userName
          next()
        } else { // couldn't login - redirect to 404
          next('/404')
        }
      })
    }
  })
}
