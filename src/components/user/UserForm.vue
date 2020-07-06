<template>
  <form class="user_form">
    <div class="user" v-if="mostrarDadosLogin">
      <div class="field">
        <label class="field__label" for="nome">Nome</label>
        <input class="field__input" type="text" name="nome" id="nome" v-model="nome" />
      </div>
      <div class="field">
        <label class="field__label" for="email">Email</label>
        <input class="field__input" type="email" name="email" id="email" v-model="email" />
      </div>
      <div class="field">
        <label class="field__label" for="senha">Senha</label>
        <input class="field__input" type="password" name="senha" id="senha" v-model="senha" />
      </div>
    </div>
    <div class="field">
      <label class="field__label" for="cep">Cep</label>
      <input class="field__input" type="text" name="cep" id="cep" v-model="cep" />
    </div>
    <div class="field">
      <label class="field__label" for="endereco">Endereco</label>
      <input class="field__input" type="text" name="endereco" id="endereco" v-model="endereco" />
    </div>
    <div class="field">
      <label class="field__label" for="bairro">Bairro</label>
      <input class="field__input" type="text" name="bairro" id="bairro" v-model="bairro" />
    </div>
    <div class="field">
      <label class="field__label" for="cidade">Cidade</label>
      <input class="field__input" type="text" name="cidade" id="cidade" v-model="cidade" />
    </div>
    <div class="field">
      <label class="field__label" for="estado">Estado</label>
      <input class="field__input" type="text" name="estado" id="estado" v-model="estado" />
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
}
</style>