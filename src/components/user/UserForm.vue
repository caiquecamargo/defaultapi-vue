<template>
  <form class="user_form">
    <div class="user">
      <div class="field" :class="verifyName">
        <label class="field__label" for="name">Name</label>
        <input class="field__input" type="text" name="name" id="name" v-model="name" />
      </div>
      <div class="field" :class="verifyEmail">
        <label class="field__label" for="email">Email</label>
        <input class="field__input" type="email" name="email" id="email" v-model="email" />
      </div>
      <div class="field" :class="verifyPassword">
        <label class="field__label" for="password">Password</label>
        <input
          class="field__input"
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>
    </div>
    <div class="field" :class="verifyPostalcode">
      <label class="field__label" for="postalcode">Postalcode</label>
      <input
        class="field__input"
        type="text"
        name="postalcode"
        id="postalcode"
        v-model="postalcode"
      />
    </div>
    <div class="field" :class="verifyAddress">
      <label class="field__label" for="address">Address</label>
      <input class="field__input" type="text" name="address" id="address" v-model="address" />
    </div>
    <div class="field" :class="verifyNumber">
      <label class="field__label" for="number">Number</label>
      <input class="field__input" type="text" name="number" id="number" v-model="number" />
    </div>
    <div class="field" :class="verifyNeighborhood">
      <label class="field__label" for="neighborhood">Neighborhood</label>
      <input
        class="field__input"
        type="text"
        name="neighborhood"
        id="neighborhood"
        v-model="neighborhood"
      />
    </div>
    <div class="field" :class="verifyCity">
      <label class="field__label" for="city">City</label>
      <input class="field__input" type="text" name="city" id="city" v-model="city" />
    </div>
    <div class="field" :class="verifyState">
      <label class="field__label" for="state">State</label>
      <input class="field__input" type="text" name="state" id="state" v-model="state" />
    </div>

    <div class="button">
      <slot />
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
// import { getCep } from "@/services.js";

export default {
  name: "UserForm",
  method: {},
  computed: {
    ...mapFields({
      fields: [
        "name",
        "email",
        "password",
        "postalcode",
        "address",
        "number",
        "neighborhood",
        "city",
        "state"
      ],
      base: "user",
      mutation: "UPDATE_USER"
    }),
    verifyName() {
      return {
        filled: this.$store.state.user.name
          ? this.$store.state.user.name.length
          : false
      };
    },
    verifyEmail() {
      return {
        filled: this.$store.state.user.email
          ? this.$store.state.user.email.length
          : false
      };
    },
    verifyPassword() {
      return {
        filled: this.$store.state.user.password
          ? this.$store.state.user.password.length
          : false
      };
    },
    verifyPostalcode() {
      return {
        filled: this.$store.state.user.postalcode
          ? this.$store.state.user.postalcode.length
          : false
      };
    },
    verifyAddress() {
      return {
        filled: this.$store.state.user.address
          ? this.$store.state.user.address.length
          : false
      };
    },
    verifyNumber() {
      return {
        filled: this.$store.state.user.number
          ? this.$store.state.user.number.length
          : false
      };
    },
    verifyNeighborhood() {
      return {
        filled: this.$store.state.user.neighborhood
          ? this.$store.state.user.neighborhood.length
          : false
      };
    },
    verifyCity() {
      return {
        filled: this.$store.state.user.city
          ? this.$store.state.user.city.length
          : false
      };
    },
    verifyState() {
      return {
        filled: this.$store.state.user.state
          ? this.$store.state.user.state.length
          : false
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.user_form {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  .user {
    display: flex;
    flex-direction: column;
  }

  .button {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }
}
</style>