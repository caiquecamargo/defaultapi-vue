<template>
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
      <input class="field__input" type="password" name="password" id="password" v-model="password" />
    </div>
  </div>
</template>

<script>
import { mapFields } from "@/modules/helpers.js";
// import { getCep } from "@/modules/services.js";

export default {
  name: "UserDataForm",
  method: {},
  computed: {
    ...mapFields({
      fields: ["name", "email", "password"],
      base: ["user"],
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
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
}
</style>