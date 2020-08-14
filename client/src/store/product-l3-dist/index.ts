import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state, { ProductL3DistStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const productl3dist: Module<ProductL3DistStateInterface, StoreInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default productl3dist
