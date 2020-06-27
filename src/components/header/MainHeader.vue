<template>
  <div class="main_header">
    <img src="../../assets/logo.png" alt="logo" class="logo" />
    <form action class="search">
      <input type="text" name="search" id="search" class="search__input" :placeholder="search" />
      <input
        type="submit"
        name="search__button"
        id="search__button"
        value="search"
        class="search__button"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      search: "Buscar..."
    };
  }
};
</script>

<style lang="scss" scoped>
.main_header {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 50px;
    height: 50px;
  }

  .search {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 15px;
    position: relative;

    &__input {
      width: 100%;
    }

    &__button {
      background: url("../../assets/search.svg") no-repeat center center;
      position: absolute;
      right: 0;
      text-indent: -150px;
      width: 50px;
      cursor: pointer;
    }
  }
}
</style>