import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state, { ReportsStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const reportsModule: Module<ReportsStateInterface, StoreInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default reportsModule
