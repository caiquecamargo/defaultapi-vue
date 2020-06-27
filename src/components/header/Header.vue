<template>
  <header>
    <MainHeader />
    <MenuHeader />
  </header>
</template>

<script>
import MainHeader from "@/components/header/MainHeader.vue";
import MenuHeader from "@/components/header/MenuHeader.vue";

export default {
  name: "Header",
  components: {
    MainHeader,
    MenuHeader
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 5px 15px;
  background: $header_background_color;
}
</style>