<template>
  <section class="product">
    <Images :images="images" />
    <Information :product="product" />
  </section>
</template>

<script>
import { api } from "@/services.js";
import Information from "@/components/product/Information.vue";
import Images from "@/components/product/Images.vue";

export default {
  name: "Product",
  props: ["id"],
  components: {
    Information,
    Images
  },
  data() {
    return {
      product: {},
      images: []
    };
  },
  methods: {
    getProduct() {
      return api.get(`products/${this.id}`).then(response => {
        this.product = response.data;
        this.images = this.product.images;
      });
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
  max-width: $main_max_width;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
  padding: 15px;
}
</style>