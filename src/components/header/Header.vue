<template>
  <header>
    <TopHeader />
    <MainHeader />
    <MenuHeader />
  </header>
</template>

<script>
import TopHeader from "@/components/header/TopHeader.vue";
import MainHeader from "@/components/header/MainHeader.vue";
import MenuHeader from "@/components/header/MenuHeader.vue";

export default {
  name: "Header",
  components: {
    TopHeader,
    MainHeader,
    MenuHeader
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  padding: 5px 15px;
  margin-bottom: 100px;
  background: $header_background_color;
}
</style>