<template>
  <section class="filters">
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
}
</style>