import { boot } from 'quasar/wrappers'
import * as msal from '@azure/msal-browser'
// import { TokenRenewParameters } from '@azure/msal-common'

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

const requestScopes = {
  scopes: [clientIdStr]
  // scopes: ['api://' + process.env.AUTH_CLIENT_ID + '/Records.Remove']
}

export const msalInstance = new msal.PublicClientApplication(msalConfig)

// // Register Callbacks for Redirect flow
// msalInstance.handleRedirectPromise().then((tokenResponse) => {
//   const accountObj = tokenResponse ? tokenResponse.account : msalInstance.getAccount();
//   if (accountObj) {
//     // Account object was retrieved, continue with app progress
//     console.log('id_token acquired at: ' + new Date().toString());
//     // showWelcomeMessage(accountObj);
//     seeProfileRedirect();
//   } else if (tokenResponse && tokenResponse.tokenType === "Bearer") {
//     // No account object available, but access token was retrieved
//     console.log('access_token acquired at: ' + new Date().toString());
//   } else if (tokenResponse === null) {
//     // tokenResponse was null, attempt sign in or enter unauthenticated state for app
//     msalInstance.loginRedirect(requestScopes)
//   } else {
//     console.log("tokenResponse was not null but did not have any tokens: " + tokenResponse);
//   }
// }).catch((error) => {
//   console.log(error);
// });

// function signOut () {
//   msalInstance.logout();
// }

// // This function can be removed if you do not need to support IE
// async function getTokenRedirect (request: TokenRenewParameters) {
//   return await msalInstance.acquireTokenSilent(request).catch(async (error) => {
//     console.log("silent token acquisition fails.");
//     if (error instanceof AuthenticationRequiredError) {
//       if (AuthenticationRequiredError.isInteractionRequiredError(error.errorCode, error.errorDesc)) {
//         // fallback to interaction when silent call fails
//         console.log("acquiring token using redirect");
//         msalInstance.acquireTokenRedirect(request);
//       }
//     } else {
//       console.error(error);
//     }
//   });
// }

// async function seeProfileRedirect () {
//   if (msalInstance.getAccount()) {
//     const response = await getTokenRedirect(requestScopes).catch(error => {
//       console.log(error);
//     });
//   }
// }

export async function login () {
  let account = msalInstance.getAccount()
  if (account === null || account === undefined) {
    await msalInstance.loginPopup(requestScopes)
      .then(() => {
        account = msalInstance.getAccount()
      })
      .catch(err => { // e.g. popup blocked, user declined to consent to access the app
        console.error('error: ' + err)
        return null
      })
  }

  msalInstance.acquireTokenSilent(requestScopes)
  // const tokenResponse = await msalInstance.acquireTokenSilent(request).catch(async (_) => {
  //   // fallback to interaction when silent call fails
  //   return await msalInstance.acquireTokenPopup(request).catch(error => {
  //     console.log(error)
  //   })
  // })
  // console.log(tokenResponse)
  return account
}

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default boot(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    // var noAuth = true
    if (to.path === '/404' || to.path === '/') { // allow not-found page to be shown
      next()
    } else { // try to get login information
      login().then(account => {
        if (account === null || account === undefined) { // couldn't login - redirect to 404
          next('/404')
        } else {
          store.state.account = account
          store.state.bearerToken = account.idToken
          next()
        }
      })
    }
  })
})
