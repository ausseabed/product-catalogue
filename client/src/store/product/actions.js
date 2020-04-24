const axios = require('axios').default

export async function fetchData ({ commit }, recordId) {
  try {
    const response = await axios.get('/api/product/' + recordId)
    response.unsaved_row = false
    commit('updateSavedData', response.data)
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
}

export async function saveData ({ commit, dispatch }, newProduct) {
  try {
    var response
    if (newProduct.unsaved_row) {
      await axios.post('/api/product/', newProduct)
    } else {
      await axios.put('/api/product/' + newProduct.id, newProduct)
    }

    newProduct.unsaved_row = false
    console.debug(response)
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
  dispatch('products/fetchData', { commit }, { root: true })
}

export async function addEmptyRowAction ({ commit }) {
  commit('addEmptyRow')
}
