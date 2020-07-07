import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {}
  },
  mutations: {
    UPDATE_CART(state, payload) {
      const { id } = payload;
      if (!state.cart[id]) {
        state.cart.id = {
          qtyInCart: 1,
          content: payload
        }
      } else {
        state.cart[id].qtyInCart += 1;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
