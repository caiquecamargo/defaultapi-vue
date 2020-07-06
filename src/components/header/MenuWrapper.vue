<template>
  <ul v-if="filteredProducts.length" class="menu__second_level">
    <li v-for="(product, index) in filteredProducts" :key="index">
      <router-link
        :to="{ name: 'Product', params: { id: product.id } }"
        class="menu__second_level__link"
      >{{product.name}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuWrapper",
  props: {
    category: {
      type: String,
      default: ""
    },
    products: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      filteredProducts: []
    };
  },
  methods: {
    filterProductsByCategory() {
      this.filteredProducts = this.products.filter(
        product => product.categories[0].name === this.category
      );
    }
  },
  watch: {
    products() {
      this.filterProductsByCategory();
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  &__second_level {
    position: absolute;
    max-height: 0;
    overflow: hidden;
    width: 100%;
    background: $header_background_color;
    transition: 0.1s;

    &__link {
      padding: 5px;
      text-align: center;
      color: #fff;
    }
  }
}
</style>