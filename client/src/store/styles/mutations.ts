import { MutationTree } from 'vuex'
import { StylesStateInterface } from './state'
import { Style } from '@ausseabed/product-catalogue-rest-client'

const mutation: MutationTree<StylesStateInterface> = {
  dataLoaded (state: StylesStateInterface, payload: Style[]) {
    state.styles = payload
  },
  errorMessage (state: StylesStateInterface, payload) {
    console.log(JSON.stringify(payload))
    state.errorMessages.push(payload)
  }
}

export default mutation
