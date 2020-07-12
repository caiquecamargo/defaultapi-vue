<template>
  <section class="cart">
    <header class="title">
      <h1 class="text">Carrinho</h1>
    </header>
    <ul class="list">
      <li class="item" v-for="{ id, item, qtyInCart } in cart" :key="id">
        <span class="name">{{item.name}}</span>
        <span class="quantity">
          <button class="minus" :value="id" @click.prevent="removeItem">-</button>
          <input class="valor" :value="qtyInCart" />
          <button class="plus" :value="id" @click.prevent="addItem">+</button>
        </span>
        <p class="total_price">{{item.price * qtyInCart | numberToValor}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CartList",
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addItem({ target }) {
      const id = Number(target.value);
      this.$store.dispatch("addItemToCart", id);
    },
    removeItem({ target }) {
      const id = Number(target.value);
      this.$store.dispatch("removeItemFromCart", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  border-radius: 4px;
  background: $disabled_color;
  padding: 15px;
  margin: 15px;
  max-width: 600px;

  .title {
    .text {
      @include font;
      font-size: 1.8rem;
      font-weight: bold;
      color: $primary_color;
      text-align: center;
    }
  }

  .list {
    margin-top: 15px;

    .item {
      margin-bottom: 10px;
      display: flex;
      align-content: center;
      justify-content: space-between;

      .name,
      .total_price {
        @include font;
        font-size: 1.2rem;
        font-style: italic;
      }

      .quantity {
        display: flex;
        grid-template-columns: 1fr 35px 50px;

        .minus,
        .plus {
          @include button;
          padding: 0;
          width: 15px;
          margin: 0 5px;
        }

        .valor {
          border: none;
          width: 20px;
          text-align: center;
          background: transparent;
        }
      }

      .total_price {
        color: $third_color;
      }
    }
  }
}
</style>