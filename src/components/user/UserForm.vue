<template>
  <form class="user_form">
    <div class="user">
      <div class="field" :class="{ filled: name.length }">
        <label class="field__label" for="name">Name</label>
        <input class="field__input" type="text" name="name" id="name" v-model="name" />
      </div>
      <div class="field" :class="{ filled: email.length }">
        <label class="field__label" for="email">Email</label>
        <input class="field__input" type="email" name="email" id="email" v-model="email" />
      </div>
      <div class="field" :class="{ filled: password.length }">
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
    <div class="field" :class="{ filled: postalcode.length }">
      <label class="field__label" for="postalcode">Postalcode</label>
      <input
        class="field__input"
        type="text"
        name="postalcode"
        id="postalcode"
        v-model="postalcode"
      />
    </div>
    <div class="field" :class="{ filled: address.length }">
      <label class="field__label" for="address">Address</label>
      <input class="field__input" type="text" name="address" id="address" v-model="address" />
    </div>
    <div class="field" :class="{ filled: neighborhood.length }">
      <label class="field__label" for="neighborhood">Neighborhood</label>
      <input
        class="field__input"
        type="text"
        name="neighborhood"
        id="neighborhood"
        v-model="neighborhood"
      />
    </div>
    <div class="field" :class="{ filled: city.length }">
      <label class="field__label" for="city">City</label>
      <input class="field__input" type="text" name="city" id="city" v-model="city" />
    </div>
    <div class="field" :class="{ filled: state.length }">
      <label class="field__label" for="state">State</label>
      <input class="field__input" type="text" name="state" id="state" v-model="state" />
    </div>

    <div class="button">
      <slot />
    </div>
  </form>
</template>

<script>
// import { mapFields } from "@/helpers.js";
// import { getCep } from "@/services.js";

export default {
  name: "UserForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      postalcode: "",
      address: "",
      neighborhood: "",
      city: "",
      state: ""
    };
  },
  method: {},
  computed: {}
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