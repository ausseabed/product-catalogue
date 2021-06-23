import { Style } from '@ausseabed/product-catalogue-rest-client'

export interface StylesStateInterface {
  styles: Style[];
  errorMessages: string[];
}

const state: StylesStateInterface = {
  styles: [],
  errorMessages: []
}

export default state
