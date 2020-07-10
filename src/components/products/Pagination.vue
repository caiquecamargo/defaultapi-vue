<template>
  <ul class="pagination" v-if="totalPages > 1">
    <li class="item">
      <router-link class="link first" :to="{ query: query(1) }">first</router-link>
    </li>
    <li class="item" v-for="page in pages" :key="page">
      <router-link class="link" :to="{ query: query(page) }">{{page}}</router-link>
    </li>
    <li class="item">
      <router-link class="link last" :to="{ query: query(totalPages) }">last</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: ["totalPages"],
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        page: page
      };
    }
  },
  computed: {
    pages() {
      const current = Number(this.$route.query.page);
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.totalPages;
      const pages = [];

      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }

      pages.splice(0, current - offset);
      pages.splice(range, total);

      return pages;
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  grid-column: 2/-1;
  display: flex;
  justify-content: center;
  padding: 15px;

  .item + .item {
    margin-left: 5px;
  }

  .link {
    background: $second_color;
    border-radius: 4px;
    padding: 5px;
    color: white;
    @include hover_button($primary_color);

    &.router-link-exact-active {
      background: $primary_color;
      cursor: default;
      &:hover {
        transform: scale(1);
      }
    }
  }

  .first::before {
    content: "<<";
    margin-right: 5px;
  }

  .last::after {
    content: ">>";
    margin-left: 5px;
  }
}
</style>