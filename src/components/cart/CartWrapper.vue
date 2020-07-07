<template>
  <section class="cart_wrapper">
    <header class="header">
      <h2 class="title">Itens no carrinho</h2>
    </header>
    <ul v-if="cart.length" class="container">
      <li class="item" v-for="( item, index ) in cart" :key="index">
        <p class="item__name">{{item.name}}</p>
        <div class="remove_item">remover</div>
      </li>
    </ul>
    <div class="not_in_cart" v-else>
      <p class="text">Nenhum item adicionado ao carrinho.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "CartWrapper",
  computed: {
    cart() {
      console.log(this.$store.state.cart);
      return this.$store.state.cart;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart_wrapper {
  opacity: 0;
  position: absolute;
  background: $primary_color;
  right: 0;
  padding: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;

  .title {
    @include font;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: white;
      display: block;
    }
  }

  .container {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;

      &__name {
        @include font;
        font-size: 0.9rem;
      }
    }
  }
}
</style>