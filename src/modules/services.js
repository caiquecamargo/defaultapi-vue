import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";

const woocommerce = new WooCommerceRestApi({
  url: "http://defaultapi.local",
  consumerKey: "ck_3616fe9c096b2c7584254132eec4fc35c038358a", //NOTE
  consumerSecret: "cs_59a93494528077930bfa44f4d190b4a75b2b24ca", //NOTE
  // consumerKey: "ck_10353726e1796aa935558a39dda6bb6aa74b83f5", //PC
  // consumerSecret: "cs_721b37f3d26087cb193d353321352110a848b43b", //PC
  version: "wc/v2"
});

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)

export const api = {
  get(endpoint, params = {}) {
    return woocommerce.get(endpoint, params);
  },
  post(endpoint, params = {}) {
    return woocommerce.post(endpoint, params);
  },
  axiosPost(endpoint, body) {
    return axiosInstance.post(`http://defaultapi.local/wp-json/api/${endpoint}`, body);
  },
  axiosPut(endpoint, body) {
    return axiosInstance.put(`http://defaultapi.local/wp-json/api/${endpoint}`, body);
  },
  axiosGet(endpoint) {
    return axiosInstance.get(`http://defaultapi.local/wp-json/api/${endpoint}`);
  },
  login(body) {
    return axiosInstance.post("http://defaultapi.local/wp-json/jwt-auth/v1/token", body);
  },
  validateToken() {
    return axiosInstance.post("http://defaultapi.local/wp-json/jwt-auth/v1/token/validate");
  }
}

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}