import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth'
import { basket } from './basket'
import { product } from './product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    basket,
    product
  }
})