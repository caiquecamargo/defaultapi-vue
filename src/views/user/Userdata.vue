<template>
  <section class="userdata">
    <header class="header">
      <h1 class="title">Dados do Usuário</h1>
    </header>
    <UserForm :data="true">
      <button @click.prevent="attUserData" class="btn">Atualizar dados</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/user/UserForm";
// import { api } from "@/modules/services.js";

export default {
  name: "Userdata",
  components: {
    UserForm
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.userdata {
  padding: 15px;
  margin-left: 15px;
}

.header {
  .title {
    @include font;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: $primary_color;
  }
}

.btn {
  @include button;
}
</style>