<template>
  <section class="categories" v-if="categories">
    <header class="header">
      <h2 class="title">Categories</h2>
    </header>
    <ul class="container">
      <li class="item" v-for="category in categories" :key="category.id">
        <router-link
          class="link"
          :to="{ name: 'Products', params: { category: category.id }}"
        >{{category.name}}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { getProductsCategories } from "@/modules/retrieveData.js";

export default {
  name: "CategoriesFilter",
  data() {
    return {
      categories: null
    };
  },
  methods: {
    async attCategories() {
      this.categories = await getProductsCategories();
    }
  },
  created() {
    this.attCategories();
  }
};
</script>

<style lang="scss" scoped>
.categories {
  padding: 15px;
  background: $second_color;

  .header {
    .title {
      @include font;
      font-size: 1.5rem;
      text-align: center;
      color: white;
      margin-bottom: 15px;

      &:after {
        content: "";
        width: 100%;
        height: 1px;
        background: white;
        display: block;
        margin-top: 5px;
      }
    }
  }

  .container {
    .link {
      display: flex;
      align-items: center;
      padding: 5px;
      color: white;
      @include link_hover(white);

      &:hover {
        &::before {
          background: white;
        }
      }

      &::before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 7.5px;
        box-shadow: 0 0 0 1px $second_color, 0 0 0 3px white;
        margin-right: 10px;
      }

      &.router-link-active::before {
        background: white;
      }
    }
  }
}
</style>