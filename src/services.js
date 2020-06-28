import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";

const woocommerce = new WooCommerceRestApi({
  url: "http://defaultapi.local",
  consumerKey: "ck_3616fe9c096b2c7584254132eec4fc35c038358a",
  consumerSecret: "cs_59a93494528077930bfa44f4d190b4a75b2b24ca",
  version: "wc/v2"
});

export const api = {
  get(endpoint, params = {}) {
    return woocommerce.get(endpoint, params);
  }
}

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}