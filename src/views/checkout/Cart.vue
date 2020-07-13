<template>
  <section class="cart">
    <CartList />
    <Resume />
  </section>
</template>

<script>
import CartList from "@/components/cart/CartList";
import Resume from "@/components/checkout/Resume";

export default {
  name: "Cart",
  components: {
    CartList,
    Resume
  }
};
</script>

<style lang="scss" scoped>
.cart {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>