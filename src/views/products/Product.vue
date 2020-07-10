<template>
  <section class="product">
    <div v-show="show" class="product__container">
      <Images :images="images" />
      <Information :product="product" />
    </div>
    <Loading v-show="!show" />
  </section>
</template>

<script>
import { api } from "@/modules/services.js";
import Information from "@/components/product/Information.vue";
import Images from "@/components/product/Images.vue";
import Loading from "@/components/loading/Loading.vue";

export default {
  name: "Product",
  props: ["id"],
  components: {
    Information,
    Images,
    Loading
  },
  data() {
    return {
      product: {},
      images: [],
      show: false
    };
  },
  methods: {
    getProduct() {
      this.show = false;
      return api.get(`products/${this.id}`).then(response => {
        this.show = true;
        this.product = response.data;
        this.images = this.product.images;
      });
    }
  },
  watch: {
    id() {
      this.getProduct();
    }
  },
  created() {
    this.getProduct();
  }
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: center;
  max-width: $main_max_width;
  min-height: 100vh;

  &__container {
    display: flex;
    margin-top: 50px;
    padding: 15px;
    width: 100%;
  }
}
</style>