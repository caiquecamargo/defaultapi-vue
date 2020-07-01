<template>
  <main class="products">
    <Filters />
    <div v-for="product in products" :key="product.id">
      <Template :product="product" />
    </div>
  </main>
</template>

<script>
import Filters from "@/components/products/Filters.vue";
import Template from "@/components/products/Template.vue";
import { api } from "@/services.js";

export default {
  name: "Products",
  components: {
    Filters,
    Template
  },
  props: ["category"],
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      return api.get("products", { per_page: 10 }).then(response => {
        this.products = response.data;
      });
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
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px;
  max-width: $main_max_width;
  margin: 100px auto;
}
</style>