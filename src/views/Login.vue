<template>
  <section class="login">
    <h1 class="login__title">Login</h1>
    <form class="login__form">
      <div class="field" :class="{ filled: user.email.length }">
        <label class="field__label" for="email">Email</label>
        <input class="field__input" type="email" name="email" id="email" v-model="user.email" />
      </div>
      <div class="field" :class="{ filled: user.email.length }">
        <label class="field__label" for="password">Password</label>
        <input
          class="field__input"
          type="password"
          name="password"
          id="password"
          v-model="user.password"
        />
      </div>
      <button class="btn" @click.prevent="login">Login</button>
    </form>
    <p class="lost_password">
      <a href="/" target="_blank" @click.prevent="lostpassword">Recuperar senha</a>
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
  watch: {},
  methods: {
    async login() {
      await this.$store.dispatch("login", this.user);
      await this.$store.dispatch("getUser");
      await this.$router.push({ name: "User" });
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  max-width: 500px;

  &__title {
    text-align: center;
    margin-bottom: 30px;
    @include font;
    font-size: 2rem;
    font-weight: bold;
    color: $primary_color;
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    align-items: center;

    .btn {
      @include button;
      width: 300px;
      justify-self: center;
    }
  }

  .lost_password {
    a {
      color: $primary_color;
      text-align: right;
      @include link_hover;
    }
  }
}
</style>