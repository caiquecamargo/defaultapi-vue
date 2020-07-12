<template>
  <section class="cart">
    <CartList />
  </section>
</template>

<script>
import CartList from "@/components/cart/CartList";

export default {
  name: "Cart",
  components: {
    CartList
  }
};
</script>

<style lang="scss" scoped>
</style>