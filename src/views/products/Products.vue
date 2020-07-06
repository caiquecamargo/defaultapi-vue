<template>
  <main class="products">
    <Filters />
    <transition-group class="transition_container" mode="out-in">
      <div v-show="show" v-for="product in products" :key="product.id">
        <Template :product="product" />
      </div>
      <Loading v-show="!show" key="loading" />
    </transition-group>
  </main>
</template>

<script>
import Filters from "@/components/products/Filters.vue";
import Template from "@/components/products/Template.vue";
import Loading from "@/components/loading/Loading.vue";
import { api } from "@/services.js";

export default {
  name: "Products",
  props: ["category"],
  components: {
    Filters,
    Template,
    Loading
  },
  data() {
    return {
      products: [],
      show: false
    };
  },
  methods: {
    getProducts() {
      const category = this.category === "#" ? null : this.category;
      this.show = false;
      return api
        .get("products", { per_page: 12, category: category })
        .then(response => {
          this.show = true;
          this.products = response.data;
        });
    }
  },
  watch: {
    category() {
      this.getProducts();
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 15px;
  padding: 15px;
  max-width: $main_max_width;
  margin: 100px auto;

  .transition_container {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }
}
</style>