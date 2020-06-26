<template>
  <div class="home">
    {{json}}
    <button @click.prevent="getProducts">Retrieve Information</button>
  </div>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      json: ""
    };
  },
  methods: {
    getProducts() {
      api.get("products").then(response => {
        console.log(response);
      });
    }
  }
};
</script>
