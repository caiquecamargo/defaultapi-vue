<template>
  <div id="app">
    <Header />
    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "APP",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "scss/normalize.scss";
@import "scss/reset.scss";
@import "scss/settings.scss";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>
