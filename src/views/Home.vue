<template>
  <div class="home">
    <ul>
      <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
    <button @click.prevent="getProducts">Retrieve Information</button>
  </div>
</template>

<script>
import { api } from "@/modules/services.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      items: []
    };
  },
  methods: {
    getProducts() {
      api.get("customers").then(response => {
        console.log(response);
        this.items = response.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 50px auto;
}
</style>