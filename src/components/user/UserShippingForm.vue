<template>
  <div class="shipping">
    <header class="header">
      <h2 class="title">Shipping Address</h2>
    </header>
    <div class="field" :class="verifyPostalcode">
      <label class="field__label" for="shipping-postalcode">Postalcode</label>
      <input
        class="field__input"
        type="text"
        name="postalcode"
        id="shipping-postalcode"
        v-model="postalcode"
      />
    </div>
    <div class="field" :class="verifyAddress">
      <label class="field__label" for="address">Address</label>
      <input
        class="field__input"
        type="text"
        name="address"
        id="shipping-address"
        v-model="address"
      />
    </div>
    <div class="field" :class="verifyNumber">
      <label class="field__label" for="shipping-number">Number</label>
      <input class="field__input" type="text" name="number" id="shipping-number" v-model="number" />
    </div>
    <div class="field" :class="verifyNeighborhood">
      <label class="field__label" for="shipping-neighborhood">Neighborhood</label>
      <input
        class="field__input"
        type="text"
        name="neighborhood"
        id="shipping-neighborhood"
        v-model="neighborhood"
      />
    </div>
    <div class="field" :class="verifyCity">
      <label class="field__label" for="shipping-city">City</label>
      <input class="field__input" type="text" name="city" id="shipping-city" v-model="city" />
    </div>
    <div class="field" :class="verifyState">
      <label class="field__label" for="shipping-state">State</label>
      <input class="field__input" type="text" name="state" id="shipping-state" v-model="state" />
    </div>
  </div>
</template>

<script>
import { mapFields } from "@/modules/helpers.js";
// import { getCep } from "@/modules/services.js";

export default {
  name: "UserShippingForm",
  method: {},
  computed: {
    ...mapFields({
      fields: [
        "postalcode",
        "address",
        "number",
        "neighborhood",
        "city",
        "state"
      ],
      base: ["user", "shipping"],
      mutation: "UPDATE_USER"
    }),
    verifyPostalcode() {
      return {
        filled: this.$store.state.user.shipping.postalcode
          ? this.$store.state.user.shipping.postalcode.length
          : false
      };
    },
    verifyAddress() {
      return {
        filled: this.$store.state.user.shipping.address
          ? this.$store.state.user.shipping.address.length
          : false
      };
    },
    verifyNumber() {
      return {
        filled: this.$store.state.user.shipping.number
          ? this.$store.state.user.shipping.number.length
          : false
      };
    },
    verifyNeighborhood() {
      return {
        filled: this.$store.state.user.shipping.neighborhood
          ? this.$store.state.user.shipping.neighborhood.length
          : false
      };
    },
    verifyCity() {
      return {
        filled: this.$store.state.user.shipping.city
          ? this.$store.state.user.shipping.city.length
          : false
      };
    },
    verifyState() {
      return {
        filled: this.$store.state.user.shipping.state
          ? this.$store.state.user.shipping.state.length
          : false
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.shipping {
  display: flex;
  flex-direction: column;

  .header {
    .title {
      @include font;
      font-size: 1.5rem;
      font-weight: bold;
      color: $primary_color;
      margin-bottom: 15px;
      margin-top: 15px;
    }
  }
}
</style>