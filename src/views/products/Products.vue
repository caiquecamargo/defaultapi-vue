<template>
  <main class="products">
    <Filters />
    <transition-group class="transition_container" mode="out-in">
      <div v-show="show" v-for="product in products" :key="product.id">
        <Template :product="product" />
      </div>
      <Loading v-show="!show" key="loading" />
    </transition-group>
    <Pagination :totalPages="totalPages" />
  </main>
</template>

<script>
import Filters from "@/components/products/filters/Filters.vue";
import Template from "@/components/products/Template.vue";
import Loading from "@/components/loading/Loading.vue";
import Pagination from "@/components/products/Pagination.vue";
import { api } from "@/modules/services.js";

export default {
  name: "Products",
  props: ["category"],
  components: {
    Filters,
    Template,
    Loading,
    Pagination
  },
  data() {
    return {
      products: [],
      show: false,
      totalPages: 0,
      per_page: 12
    };
  },
  methods: {
    getProducts() {
      this.show = false;
      if (!this.params.page) this.$route.query.page = 1;
      return api.get("products", this.params).then(response => {
        this.totalPages = response.headers["x-wp-totalpages"];
        this.show = true;
        this.products = response.data;
      });
    }
  },
  computed: {
    params() {
      const category = this.category === "#" ? null : this.category;

      return {
        ...this.$route.query,
        per_page: this.per_page,
        category: category
      };
    }
  },
  watch: {
    category() {
      this.getProducts();
    },
    params() {
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
  gap: 30px;
  padding: 15px;
  max-width: $main_max_width;
  margin: 100px auto;

  .transition_container {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(4, minmax(200px, 1fr));

    @include medium-window {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
  }
}
</style>