import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth'
import { basket } from './basket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    basket
  }
})