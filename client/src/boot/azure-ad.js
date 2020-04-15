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
  console.log(process.env)
  console.log(msalConfig)
  var result
  if (msalInstance.getAccount()) {
    result = true
  }

  const loginResponse = await msalInstance.loginPopup({})
    .then(_ => {
      console.log(loginResponse)
      result = true
    })
    .catch(err => { // e.g. popup blocked, user declined to consent to access the app
      console.error('error: ' + err)
      result = false
    })

  console.log('result was ' + result)
  return result
}

// "async" is optional
export default ({ app, router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    if (to.path === '/404') { // allow not-found page to be shown
      next()
    } else { // try to get login information
      login().then(response => {
        console.log('response' + response)
        if (response) {
          next()
        } else { // couldn't login - redirect to 404
          next('/404')
        }
      })
    }
  })
}
