<template>
  <nav class="menu">
    <ul v-if="categories" class="menu__container">
      <li v-for="category in categories" :key="category.name" class="menu__item">
        <router-link
          :to="{ name: 'Products', params: {category: category.id}}"
          class="menu__item__link"
        >{{category.name}}</router-link>
        <MenuWrapper :category="category.name" :products="products" />
      </li>
    </ul>
  </nav>
</template>

<script>
import MenuWrapper from "@/components/header/MenuWrapper.vue";
import { api } from "@/modules/services.js";

export default {
  name: "MenuHeader",
  components: {
    MenuWrapper
  },
  data() {
    return {
      categories: [],
      products: []
    };
  },
  methods: {
    getProductsCategories() {
      return api.get("products/categories").then(response => {
        this.categories = response.data.filter(
          item => item.name !== "Uncategorized"
        );
      });
    },
    getProducts() {
      return api.get("products", { per_page: 50 }).then(response => {
        this.products = response.data;
      });
    }
  },
  created() {
    this.getProductsCategories();
    this.getProducts();
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  left: 0;
  width: 100%;
  top: 25px;
  padding-top: 75px;
  padding-left: 15px;
  padding-right: 15px;
  background: inherit;

  &__container {
    display: flex;
    justify-content: space-around;
  }

  &__item {
    flex: 1;
    position: relative;

    &__link {
      padding: 5px;
      text-align: center;
      color: #fff;
    }
  }

  &__item:hover &__second_level {
    display: block;
    max-height: 100vh;
    transition: 1s;
  }
}
</style>