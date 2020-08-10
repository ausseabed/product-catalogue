
import { AccountInfo } from '@azure/msal-browser'

export interface AuthStateInterface {
  account: AccountInfo | undefined;
  bearerToken: string | undefined;
}

const state: AuthStateInterface = {
  account: undefined,
  bearerToken: undefined
}

export default state
