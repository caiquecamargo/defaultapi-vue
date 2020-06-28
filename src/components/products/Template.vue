<template>
  <div class="product-template"></div>
</template>

<script>
export default {
  name: "Template",
  props: ["product"],
  created() {
    console.log(this.product);
  }
};
</script>

<style lang="scss" scoped>
</style>