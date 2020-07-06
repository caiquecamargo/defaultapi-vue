<template>
  <router-link :to="{name: 'Product', params: {id: product.id}}">
    <section class="product-template">
      <img class="img" :src="product.images[0].src" :alt="product.name" />
      <div class="informations">
        <p v-if="variations.length" class="price">A partir de {{minVariationPrice | numberToValor}}</p>
        <p v-else class="price">{{product.price| numberToValor}}</p>
        <h2 class="name">{{product.name}}</h2>
        <p class="description">{{getTextDescriptionFromHtmlElement}}</p>
      </div>
    </section>
  </router-link>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Template",
  props: ["product"],
  data() {
    return {
      variations: []
    };
  },
  methods: {
    getProductVariations() {
      api.get(`products/${this.product.id}/variations`).then(response => {
        this.variations = response.data;
      });
    },
    reducer: (accumulator, currentValue) => Math.min(accumulator, currentValue)
  },
  computed: {
    minVariationPrice() {
      const array = [];
      this.variations.forEach(element => {
        array.push(element.price);
      });
      return array.map(Number).reduce(this.reducer);
    },
    getTextDescriptionFromHtmlElement() {
      if (this.product.short_description) {
        const div = document.createElement("div");
        div.innerHTML = this.product.short_description;
        return div.firstChild.innerText;
      }
      return "";
    }
  },
  created() {
    if (this.product.variations.length) this.getProductVariations();
  }
};
</script>

<style lang="scss" scoped>
.product-template {
  height: 450px;
  padding: 5px;
  overflow: hidden;
  @include shadow_default;
  @include hover_item;

  .img {
    height: 60%;
  }

  .informations {
    height: 40%;
    padding: 10px;
    overflow: hidden;

    .price {
      font-style: italic;
      color: $price_color;
      margin-top: 5px;
    }

    .name {
      margin-top: 5px;
      font-weight: bold;
    }

    .description {
      margin-top: 5px;
    }
  }
}
</style>