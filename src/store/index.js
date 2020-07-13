import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/modules/services';
import createLocalStorage from "@/modules/localStorageHandler.js";
import createCart from "@/modules/cart.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    strict: true,
    cart: [],
    wishlist: [],
    logged: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      cart: "",
      wishlist: "",
      billing: {
        postcode: "",
        address: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
      },
      shipping: {
        postcode: "",
        address: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
      },
    }
  },
  mutations: {
    UPDATE_CART(state, payload) {
      state.cart = payload;
      state.user.cart = JSON.stringify(payload);
    },
    UPDATE_LOGIN(state, payload) {
      state.logged = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign({}, state.user, payload)
    }
  },
  actions: {
    getUser({ commit, state }) {
      return api.axiosGet("usuario").then(response => {
        commit("UPDATE_USER", response.data);
        commit("UPDATE_LOGIN", true);

        const cart = createCart();
        commit("UPDATE_CART", cart.synchronize({ userCart: state.user.cart }));
      })
    },

    validateUser({ dispatch }) {
      const localStorage = createLocalStorage();

      if (localStorage.exists("token"))
        api.validateToken()
          .then(() => {
            dispatch("getUser");
          }).catch(() => {
            localStorage.remove("token");
          })
    },

    login(context, payload) {
      const localStorage = createLocalStorage();

      return api.login({
        username: payload.email,
        password: payload.password
      }).then(response => {
        localStorage.add("token", `Bearer ${response.data.token}`);
      })
    },

    logout({ commit }) {
      const localStorage = createLocalStorage();
      const cart = createCart();

      commit("UPDATE_LOGIN", false);
      localStorage.remove("token");
      cart.destroy();
    },

    addItemToCart({ commit, state }, value) {
      const cart = createCart();

      commit("UPDATE_CART", cart.addItem(state.cart, value));
    },

    removeItemFromCart({ commit, state }, value) {
      const cart = createCart();

      commit("UPDATE_CART", cart.removeItem(state.cart, value));
    },

    verifyExistingCart({ commit }) {
      const cart = createCart();

      if (cart.exist()) {
        commit("UPDATE_CART", cart.get());
      }
    }
  },
  modules: {
  }
})
