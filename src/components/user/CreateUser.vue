<template>
  <section class="criar-conta">
    <h2 class="titulo">Crie sua conta</h2>
    <transition-group mode="out-in">
      <button v-if="!criar" @click="criar =true" class="button" key="button">Criar conta</button>
      <UserForm v-else key="form">
        <button class="button" @click.prevent="criarUsuario">Criar usuário</button>
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
</style>