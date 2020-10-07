import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state, { SurveyL2RelationStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const module: Module<SurveyL2RelationStateInterface, StoreInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default module
