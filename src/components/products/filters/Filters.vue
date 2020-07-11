<template>
  <section class="filters">
    <header class="header">
      <h2 class="title">Filtros</h2>
    </header>
    <Categories />
  </section>
</template>

<script>
import Categories from "@/components/products/filters/Categories.vue";

export default {
  name: "Filters",
  components: {
    Categories
  }
};
</script>

<style lang="scss" scoped>
.filters {
  grid-row: 1/-1;

  .header {
    .title {
      @include font;
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: bold;
      color: $second_color;
      margin-bottom: 15px;
    }
  }
}
</style>