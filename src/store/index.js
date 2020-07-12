import Vue from 'vue'
import Vuex from 'vuex'
import { addItemToCart, removeItemFromCart } from "@/modules/helpers.js";
import { api } from '@/modules/services';
import { LocalStorage } from "@/modules/localStorageHandler.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    strict: true,
    cart: [],
    logged: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
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
    ADD_ITEM_TO_CART(state, payload) {
      state.cart = payload;
    },
    REMOVE_ITEM_FROM_CART(state, payload) {
      state.cart = payload;
    },
    UPDATE_CART(state, payload) {
      state.cart = payload;
    },
    UPDATE_LOGIN(state, payload) {
      state.logged = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign({}, state.user, payload)
    }
  },
  actions: {
    getUser({ commit }) {
      return api.axiosGet("usuario").then(response => {
        commit("UPDATE_USER", response.data);
        commit("UPDATE_LOGIN", true);
      })
    },
    validateUser({ dispatch }) {
      if (LocalStorage.exists("token"))
        api.validateToken()
          .then(() => {
            dispatch("getUser");
          }).catch(() => {
            LocalStorage.remove("token");
          })
    },
    login(context, payload) {
      return api.login({
        username: payload.email,
        password: payload.password
      }).then(response => {
        LocalStorage.add("token", `Bearer ${response.data.token}`);
      })
    },
    logout({ commit }) {
      commit("UPDATE_LOGIN", false);
      LocalStorage.remove("token");
    },
    addItemToCart({ commit, dispatch, state }, value) {
      commit("ADD_ITEM_TO_CART", addItemToCart(state.cart, value));
      dispatch("attCartInLocalStorage");
    },
    removeItemFromCart({ commit, dispatch, state }, value) {
      commit("REMOVE_ITEM_FROM_CART", removeItemFromCart(state.cart, value));
      dispatch("attCartInLocalStorage");
    },
    attCartInLocalStorage({ state }) {
      LocalStorage.add("cart", state.cart);
    },
    verifyExistingCart({ commit }) {
      if (LocalStorage.exists("cart")) {
        const cart = LocalStorage.get("cart");
        commit("UPDATE_CART", cart);
      }
    }
  },
  modules: {
  }
})
