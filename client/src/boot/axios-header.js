import axios from 'axios'
import VueAxios from 'vue-axios'

export default ({ app, router, Vue, store }) => {
  axios.interceptors.request.use(
    config => {
      if (store.state.account !== undefined) {
        config.headers.authorization = 'Bearer ' + store.state.account.idToken
      }
      console.log(config)
      return config
    },
    error => Promise.reject(error)
  )
  Vue.use(VueAxios, axios)
}
