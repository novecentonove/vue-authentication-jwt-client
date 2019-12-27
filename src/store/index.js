import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     token: null,
     user: null,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
     auth
  }
})
