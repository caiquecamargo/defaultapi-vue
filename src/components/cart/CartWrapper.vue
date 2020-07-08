<template>
  <section class="cart_wrapper">
    <header class="header">
      <h2 class="title">Itens no carrinho</h2>
    </header>
    <ul v-if="cart.length" class="container">
      <li class="item" v-for="{ id, item, qtyInCart } in cart" :key="id">
        <p class="item__name">{{item.name}}</p>
        <p class="item__name">{{qtyInCart}}</p>
        <button class="remove_item" @click.prevent="removeItemFromCart" :value="id">remover</button>
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
      return this.$store.state.cart;
    }
  },
  methods: {
    removeItemFromCart(event) {
      const itemId = Number(event.target.value);
      this.$store.commit("REMOVE_ITEM_FROM_CART", itemId);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart_wrapper {
  transition: 0.2s ease;
  max-height: 0;
  overflow: hidden;
  position: absolute;
  background: $primary_color;
  right: 0;
  padding: 0 10px;
  width: 300px;
  display: flex;
  flex-direction: column;

  .title {
    @include font;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
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
    margin-bottom: 10px;

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