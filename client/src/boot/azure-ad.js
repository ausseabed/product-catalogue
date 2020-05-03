import * as msal from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: process.env.AUTH_CLIENT_ID,
    authority: process.env.AUTH_HOST
    // redirectUri: window.location.origin
    // navigateToLoginRequestUrl: false
  },
  // cache: {
  //   storeAuthStateInCookie: true // For IE
  // },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        console.log(message)
      },
      piiLoggingEnabled: true
    }
  }
}

// async function wait (ms) {
//   var start = new Date().getTime()
//   var end = start
//   while (end < start + ms) {
//     end = new Date().getTime()
//   }
// }

console.log('MSAL constructor1')
const msalInstance = new msal.PublicClientApplication(msalConfig)
msalInstance.handleRedirectCallback(authRedirectCallBack)

function authRedirectCallBack (error, response) {
  if (error) {
    console.error('error')
    console.error(response)
    console.error(error)
  } else {
    const account = msalInstance.getAccount()
    if (account) {
      console.log(account)
    }
    console.log('token type is:' + response.tokenType)
  }
}

function login () {
  console.log('wait1')
  var request = {
    // scopes: ['User.Read']
    // scopes: ['api://' + process.env.AUTH_CLIENT_ID + '/Records.Remove']
  }

  const account = msalInstance.getAccount()
  if (account) {
    console.log(account)
    return account
  } else {
    try {
      msalInstance.loginRedirect(request)
      const account = msalInstance.getAccount()
      console.log(account)
    } catch (err) {
      // handle error
      console.error(err)
    }
  }
  return false
}

export default ({ app, router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    const account = login()
    if (account) {
      store.state.account = account
      next()
    }
  })
}

// Register Callbacks for Redirect flow
// msalInstance.handleRedirectCallback(authRedirectCallBack);
// function authRedirectCallBack (error, response) {
//   console.log('3')
//   // handle redirect response or error
//   if (error) {
//     console.log(error)
//   } else {
//     if (msalInstance.getAccount()) {
//       console.log('id_token acquired at: ' + new Date().toString())
//       // showWelcomeMessage(msalInstance.getAccount())
//       getTokenRedirect(request)
//     } else if (response.tokenType === 'Bearer') {
//       console.log('access_token acquired at: ' + new Date().toString())
//     } else {
//       console.log('token type is:' + response.tokenType)
//     }
//   }
// }

// // msalInstance.getAccount()

// // This function can be removed if you do not need to support IE
// async function getTokenRedirect (request) {
//   return await msalInstance.acquireTokenSilent(request).catch(async (error) => {
//     console.log('silent token acquisition fails.')
//     console.error(error)
//     // if (error instanceof AuthenticationRequiredError) {
//     //   if (AuthenticationRequiredError.isInteractionRequiredError(error.errorCode, error.errorDesc)) {
//     //     // fallback to interaction when silent call fails
//     //     console.log('acquiring token using redirect')
//     //     msalInstance.acquireTokenRedirect(request)
//     //   }
//     // } else {
//     //   console.error(error)
//     // }
//   })
// }
// export function login () {
//   var account = msalInstance.getAccount()
//   if (account === null || account === undefined) {
//     try {
//       msalInstance.loginRedirect(request)
//     } catch (err) {
//       // handle error
//       console.log(err)
//     }
//     // await msalInstance.loginPopup(request)
//     //   .then(_ => {
//     //     account = msalInstance.getAccount()
//     //   })
//     //   .catch(err => { // e.g. popup blocked, user declined to consent to access the app
//     //     console.error('error: ' + err)
//     //     return null
//     //   })
//     return account
//   }
//   // const tokenResponse = await msalInstance.acquireTokenSilent(request).catch(async (_) => {
//   //   // fallback to interaction when silent call fails
//   //   return await msalInstance.acquireTokenPopup(request).catch(error => {
//   //     console.log(error)
//   //   })
//   // })
//   // console.log(tokenResponse)
//   return account
// }

/*
// "async" is optional
export default ({ app, router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    // var noAuth = true
    if (to.path === '/404') { // allow not-found page to be shown
      next()
    } else { // try to get login information
      var account = login()
      if (account === null || account === undefined) { // couldn't login - redirect to 404
        // next()
      } else {
        store.state.account = account
        next()
      }
    }
  })
}
*/
