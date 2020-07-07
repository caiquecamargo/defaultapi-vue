<template>
  <div v-if="images.length" class="images">
    <div class="images__list">
      <img
        @mouseenter="gallery"
        v-for="image in images"
        :key="image.id"
        :src="image.src"
        :alt="image.name"
      />
    </div>
    <div class="images__img">
      <img ref="img" :src="images[0].src" :alt="images[0].name" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
  props: ["images"],
  methods: {
    gallery(event) {
      this.$refs.img.src = event.target.src;
    }
  }
};
</script>

<style lang="scss" scoped>
.images {
  display: grid;
  grid-template-columns: 75px 1fr;
  height: 450px;

  &__list {
    display: flex;
    flex-direction: column;
    padding: 5px;

    img {
      cursor: pointer;
      margin-bottom: 5px;
    }
  }

  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;

    img {
      max-height: 100%;
    }
  }
}
</style>