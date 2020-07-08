<template>
  <ul>
    <li v-for="page in pages" :key="page">{{page}}</li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: ["totalPages"],
  computed: {
    pages() {
      const pages = [];

      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>