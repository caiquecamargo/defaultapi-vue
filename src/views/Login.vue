<template>
  <section class="login">
    <h1 class="title">Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="user.email" />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="user.password" />
      <button class="btn" @click.prevent="login">Login</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_black">Recuperar senha</a>
    </p>
    <CreateUser />
  </section>
</template>

<script>
import CreateUser from "@/components/user/CreateUser.vue";

export default {
  name: "Login",
  components: {
    CreateUser
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      erros: []
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>