<template>
  <div @seeked="scrolling" class="main_header">
    <router-link :to="{ name: 'Home' }" class="logo">
      <img src="../../assets/logo.png" alt="logo" />
    </router-link>
    <form action class="search">
      <input
        type="text"
        name="search"
        id="search"
        class="search__input input"
        :placeholder="search"
      />
      <input
        type="submit"
        name="search__button"
        id="search__button"
        value="search"
        class="search__button input"
      />
    </form>
    <router-link :to="{ name: 'Login' }" class="login" v-if="!isLogged">Entre ou cadastre-se</router-link>
    <router-link :to="{ name: 'User' }" class="login" v-else>{{$store.state.user.name}}</router-link>
    <CartLink />
  </div>
</template>

<script>
import CartLink from "@/components/cart/CartLink.vue";
import { debounce } from "debounce";

export default {
  name: "MainHeader",
  components: {
    CartLink
  },
  data() {
    return {
      search: "Buscar..."
    };
  },
  methods: {
    scrolling() {
      const element = this.$el;
      const distanceToTop = 25;
      const scrollPosition = window.scrollY;

      if (distanceToTop < scrollPosition)
        element.classList.add("position-absolute");
      else element.classList.remove("position-absolute");
    }
  },
  computed: {
    isLogged() {
      return this.$store.state.logged;
    },
    userName() {
      return this.$store.state.user.name;
    }
  },
  created() {
    this.handlerDebounceScroll = debounce(this.scrolling, 0);
    window.addEventListener("scroll", this.handlerDebounceScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handlerDebounceScroll);
  }
};
</script>

<style lang="scss" scoped>
.main_header {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  background: inherit;
  padding-left: 15px;
  padding-right: 15px;
  z-index: 2;

  .logo {
    width: 50px;
    height: 50px;
  }

  .search {
    flex: 1;
    margin-left: 15px;
    position: relative;
    transition: 0.3s ease;

    &:focus-within {
      transition: 0.3s ease;
      transform: scale(1.03);
    }

    &__input {
      width: 100%;
    }

    &__button {
      background: url("../../assets/search.svg") no-repeat center center;
      position: absolute;
      right: 0;
      top: 0;
      text-indent: -150px;
      width: 50px;
      cursor: pointer;
    }
  }

  .login,
  .cart {
    color: #fff;
    padding: 5px 15px;
    cursor: pointer;
  }

  .cart {
    // background: url("../../assets/buy.svg") no-repeat center center;
  }
}

.main_header.position-absolute {
  position: fixed;
  top: 0;
  @include shadow_default;
}
</style>