<template>
  <section class="useraddress">
    <header class="header">
      <h1 class="title">Endereços</h1>
    </header>
    <UserForm :billing="true" :shipping="true">
      <button class="btn">Atualizar dados</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/user/UserForm";

export default {
  name: "UserAddress",
  components: {
    UserForm
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