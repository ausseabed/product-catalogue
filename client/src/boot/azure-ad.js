import * as msal from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: process.env.AUTH_CLIENT_ID,
    authority: process.env.AUTH_HOST,
    redirectUri: window.location.origin
  }
}

const msalInstance = new msal.PublicClientApplication(msalConfig)

var request = {
  // scopes: ['user.read']
}

export async function login () {
  var account = msalInstance.getAccount()
  if (account === null || account === undefined) {
    await msalInstance.loginPopup(request)
      .then(_ => {
        account = msalInstance.getAccount()
      })
      .catch(err => { // e.g. popup blocked, user declined to consent to access the app
        console.error('error: ' + err)
        return null
      })

    return account
  }
  // const tokenResponse = await msalInstance.acquireTokenSilent(request).catch(async (_) => {
  //   // fallback to interaction when silent call fails
  //   return await msalInstance.acquireTokenPopup(request).catch(error => {
  //     console.log(error)
  //   })
  // })
  // console.log(tokenResponse)
  return account
}

// "async" is optional
export default ({ app, router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    var noauth = true
    if (to.path === '/404' || noauth === true) { // allow not-found page to be shown
      next()
    } else { // try to get login information
      login().then(account => {
        if (account === null || account === undefined) { // couldn't login - redirect to 404
          next('/404')
        } else {
          store.state.account = account
          next()
        }
      })
    }
  })
}
