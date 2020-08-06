
import * as msal from '@azure/msal-browser'

export interface AuthStateInterface {
  user: string | undefined;
  bearerToken: string | undefined;
  msalInstance: msal.PublicClientApplication | undefined;
}

const state: AuthStateInterface = {
  user: undefined,
  bearerToken: undefined,
  msalInstance: undefined
}

export default state
