<template>
  <section class="useraddress">
    <header class="header">
      <h1 class="title">Endereços</h1>
    </header>
    <UserForm :billing="true" :shipping="true">
      <button @click.prevent="attUserAddress" class="btn">Atualizar endereços</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/user/UserForm";
import { api } from "@/modules/services.js";

export default {
  name: "UserAddress",
  components: {
    UserForm
  },
  methods: {
    attUserAddress() {
      api.axiosPut("usuario", this.$store.state.user).then(response => {
        console.log(response);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.useraddress {
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