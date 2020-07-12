<template>
  <section class="cart">
    <router-link :to="{ name: 'Cart' }" class="cart__link">Carrinho</router-link>
    <CartWrapper class="cart__wrapper" />
  </section>
</template>

<script>
import CartWrapper from "@/components/cart/CartWrapper";

export default {
  name: "CartLink",
  components: {
    CartWrapper
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: relative;

  &:hover &__wrapper {
    max-height: 100vh;
    transition: 1s ease;
  }

  &__link {
    @include font;
    color: white;
  }
}
</style>