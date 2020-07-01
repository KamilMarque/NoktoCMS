import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  Connected: false,
}

const mutations = {
  ADD_CONNECTION: (state) => {
    state.Connected = true
  },
  REMOVE_CONNECTION: (state) => {
    state.Connected = false
  }
}

const getters = {
  isConnected: state => state.Connected
}

const actions = {
  connect ({ commit }) {
    commit('ADD_CONNECTION')
  },
  disconnect ({ commit }) {
    commit('REMOVE_CONNECTION')
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
})
