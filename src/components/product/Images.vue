<template>
  <div class="images">
    <img v-if="images.length" :src="images[0].src" :alt="images[0].name" />
  </div>
</template>

<script>
export default {
  name: "Images",
  props: ["images"]
};
</script>

<style lang="scss" scoped>
.images {
  flex: 1;
}
</style>