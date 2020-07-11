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
  },
  created() {
    if (window.localStorage.token) this.$store.dispatch("validateUser");
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
  min-height: 110vh;

  main {
    flex: 1;
  }
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
