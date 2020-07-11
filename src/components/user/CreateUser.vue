<template>
  <section class="create_account">
    <h2 class="title">Crie sua conta</h2>
    <transition-group mode="out-in">
      <button v-if="!criar" @click="criar = true" class="btn" key="button">Criar conta</button>
      <UserForm :data="true" :billing="true" v-else key="form">
        <button class="btn" @click.prevent="criarUsuario">Criar usuário</button>
      </UserForm>
    </transition-group>
  </section>
</template>

<script>
import UserForm from "@/components/user/UserForm.vue";

export default {
  name: "CreateUser",
  components: {
    UserForm
  },
  data() {
    return {
      criar: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.create_account {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;

  .title {
    @include font;
    font-size: 1.5rem;
    font-weight: bold;
    color: $primary_color;
    margin-bottom: 15px;
  }

  .btn {
    @include button;
  }

  span {
    align-self: stretch;

    button {
      margin: 0 auto;
    }
  }
}
</style>