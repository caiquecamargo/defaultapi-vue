<template>
  <form>
    <div class="usuario" v-if="mostrarDadosLogin">
      <label for="nome">Nome</label>
      <input type="text" name="nome" id="nome" v-model="nome" />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="senha" />
    </div>
    <label for="cep">Cep</label>
    <input type="text" name="cep" id="cep" v-model="cep" />
    <label for="endereco">Endereco</label>
    <input type="text" name="endereco" id="endereco" v-model="endereco" />
    <label for="bairro">Bairro</label>
    <input type="text" name="bairro" id="bairro" v-model="bairro" />
    <label for="cidade">Cidade</label>
    <input type="text" name="cidade" id="cidade" v-model="cidade" />
    <label for="estado">Estado</label>
    <input type="text" name="estado" id="estado" v-model="estado" />
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
  method: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
</style>