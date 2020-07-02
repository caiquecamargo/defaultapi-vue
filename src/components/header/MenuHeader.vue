<template>
  <nav class="menu">
    <ul v-if="menu" class="menu__container">
      <li v-for="[ category, value ] in Object.entries(menu)" :key="category" class="menu__item">
        <router-link
          :to="{ name: 'Products', params: {category: category.toLowerCase()}}"
          class="menu__item__link"
        >{{category}}</router-link>
        <ul class="menu__second_level">
          <li v-for="(item, index) in value" :key="index">
            <router-link to="/" class="menu__second_level__link">{{item.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "MenuHeader",
  data() {
    return {
      categories: [],
      products: [],
      menu: {}
    };
  },
  methods: {
    async mountMenu() {
      await this.getProductsCategories();
      await this.getProducts();

      this.menu = {};
      this.categories.forEach(category => {
        this.menu[category.name] = this.products.filter(
          product => product.categories[0].name === category.name
        );
      });
    },
    getProductsCategories() {
      return api.get("products/categories").then(response => {
        this.categories = response.data.filter(
          item => item.name !== "Uncategorized"
        );
      });
    },
    getProducts() {
      return api.get("products").then(response => {
        this.products = response.data;
      });
    }
  },
  created() {
    this.mountMenu();
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

  &__item:hover &__second_level {
    display: block;
    max-height: 100vh;
    transition: 1s;
  }
}
</style>