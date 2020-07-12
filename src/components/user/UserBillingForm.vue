<template>
  <div class="billing">
    <header class="header">
      <h2 class="title">Billing Address</h2>
    </header>
    <div class="field" :class="verifyPostcode">
      <label class="field__label" for="billing-postcode">Postcode</label>
      <input
        class="field__input"
        type="text"
        name="postalcode"
        id="billing-postcode"
        v-model="postcode"
      />
    </div>
    <div class="field" :class="verifyAddress">
      <label class="field__label" for="billing-address">Address</label>
      <input class="field__input" type="text" name="address" id="billing-address" v-model="address" />
    </div>
    <div class="field" :class="verifyNumber">
      <label class="field__label" for="billing-number">Number</label>
      <input class="field__input" type="text" name="number" id="billing-number" v-model="number" />
    </div>
    <div class="field" :class="verifyNeighborhood">
      <label class="field__label" for="billing-neighborhood">Neighborhood</label>
      <input
        class="field__input"
        type="text"
        name="neighborhood"
        id="billing-neighborhood"
        v-model="neighborhood"
      />
    </div>
    <div class="field" :class="verifyCity">
      <label class="field__label" for="billing-city">City</label>
      <input class="field__input" type="text" name="city" id="billing-city" v-model="city" />
    </div>
    <div class="field" :class="verifyState">
      <label class="field__label" for="billing-state">State</label>
      <input class="field__input" type="text" name="state" id="billing-state" v-model="state" />
    </div>
  </div>
</template>

<script>
import { mapFields } from "@/modules/helpers.js";
// import { getCep } from "@/modules/services.js";

export default {
  name: "UserBillingForm",
  method: {},
  computed: {
    ...mapFields({
      fields: [
        "postcode",
        "address",
        "number",
        "neighborhood",
        "city",
        "state"
      ],
      base: ["user", "billing"],
      mutation: "UPDATE_USER"
    }),
    verifyPostcode() {
      return {
        filled: this.$store.state.user.billing.postcode
          ? this.$store.state.user.billing.postcode.length
          : false
      };
    },
    verifyAddress() {
      return {
        filled: this.$store.state.user.billing.address
          ? this.$store.state.user.billing.address.length
          : false
      };
    },
    verifyNumber() {
      return {
        filled: this.$store.state.user.billing.number
          ? this.$store.state.user.billing.number.length
          : false
      };
    },
    verifyNeighborhood() {
      return {
        filled: this.$store.state.user.billing.neighborhood
          ? this.$store.state.user.billing.neighborhood.length
          : false
      };
    },
    verifyCity() {
      return {
        filled: this.$store.state.user.billing.city
          ? this.$store.state.user.billing.city.length
          : false
      };
    },
    verifyState() {
      return {
        filled: this.$store.state.user.billing.state
          ? this.$store.state.user.billing.state.length
          : false
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.billing {
  display: flex;
  flex-direction: column;

  .header {
    .title {
      @include font;
      font-size: 1.5rem;
      font-weight: bold;
      color: $primary_color;
      margin-bottom: 15px;
    }
  }
}
</style>