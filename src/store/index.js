import Vue from 'vue'
import Vuex from 'vuex'
import { addItemToCart, removeItemFromCart } from "@/modules/helpers.js";
import { api } from '@/modules/services';

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
      postalcode: "",
      address: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      billing: {
        postalcode: "",
        address: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
      },
      shipping: {
        postalcode: "",
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
      state.cart = addItemToCart(state.cart, payload);
    },
    REMOVE_ITEM_FROM_CART(state, payload) {
      state.cart = removeItemFromCart(state.cart, payload);
    },
    UPDATE_LOGIN(state, payload) {
      state.logged = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign({}, state.user, payload)
    }
  },
  actions: {
    getUser(context) {
      return api.axiosGet("usuario").then(response => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      })
    },
    validateUser(context) {
      api.validateToken()
        .then(() => {
          context.dispatch("getUser");
        }).catch(() => {
          window.localStorage.removeItem("token");
        })
    },
    login(context, payload) {
      return api.login({
        username: payload.email,
        password: payload.password
      }).then(response => {
        window.localStorage.token = `Bearer ${response.data.token}`;
      })
    },
    logout(context) {
      context.commit("UPDATE_LOGIN", false);
      window.localStorage.removeItem("token");
    }
  },
  modules: {
  }
})
