<template>
  <section class="user">
    <nav class="menu">
      <ul class="container">
        <li class="item">
          <router-link :to="{ name: 'User' }">Dados cadastrais</router-link>
        </li>
        <li class="item">
          <router-link :to="{ name: 'UserAddress' }">Endereços</router-link>
        </li>
        <li class="item">
          <router-link :to="{ name: 'UserOrders' }">Pedidos</router-link>
        </li>
        <li class="item">
          <router-link to="/">Sair</router-link>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: "User"
};
</script>

<style lang="scss" scoped>
.user {
  display: grid;
  grid-template-columns: 300px 1fr;
  max-width: $main_max_width;
  margin: 100px auto;
  padding: 15px;
}

.menu {
  border-right: solid 1px $primary_color;
  border-radius: 15px;
  padding: 30px;

  .item {
    a {
      border-radius: 4px;
      background: $primary_color;
      margin-bottom: 5px;
      @include shadow_default;
      @include hover_button;
      padding: 10px;
      color: white;
    }

    a.router-link-exact-active {
      background: $disabled_color;
      color: $primary_color;
      cursor: default;

      &:hover {
        transform: scale(1);
      }
    }
  }
}
</style>