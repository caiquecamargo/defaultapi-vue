<template>
  <section class="resume">
    <header class="title">
      <h2 class="text">Resumo</h2>
    </header>
    <Shipping />
  </section>
</template>

<script>
import Shipping from "@/components/checkout/Shipping.vue";

export default {
  name: "Resume",
  components: {
    Shipping
  }
};
</script>

<style lang="scss" scoped>
.resume {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: $disabled_color;
  align-items: center;
  padding: 15px;

  .title {
    .text {
      @include font;
      color: $primary_color;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
}
</style>