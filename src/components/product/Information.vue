<template>
  <div class="informations">
    <h1 class="name">{{product.name}}</h1>
    <p class="price">{{price | numberToValor}}</p>
    <div v-if="attributes" class="select">
      <div class="select__container" v-for="{ id, name, options } in attributes" :key="id">
        <label class="select__label" :for="id">{{name | formatLabelName}}:</label>
        <select @change="changeAttribute" class="select__hook" :ref="id" :name="name" :id="id">
          <option
            class="select__option"
            v-for="option in options"
            :key="option"
            :value="option"
          >{{option}}</option>
        </select>
      </div>
    </div>
    <div class="description">{{description}}</div>
    <input
      v-if="isAvailable"
      @click.prevent="addToCart"
      type="submit"
      class="btn"
      value="Adicionar ao carrinho"
    />
    <input v-else type="submit" class="btn disabled" value="Indisponível no momento" />
  </div>
</template>

<script>
import { api } from "@/modules/services.js";
import { compareTwoArrays, removeHTMLElements } from "@/modules/helpers.js";

export default {
  name: "Information",
  props: ["product"],
  data() {
    return {
      price: 0,
      description: "",
      attributes: [],
      variations: [],
      selectedVariation: null,
      isAvailable: true
    };
  },
  methods: {
    getProductVariations() {
      return api
        .get(`products/${this.product.id}/variations`)
        .then(response => {
          this.variations = response.data;
          this.changeAttribute();
        });
    },
    getProductVariation(values) {
      const selectedVariation = this.variations.filter(variation => {
        let options = [];
        variation.attributes.forEach(attribute => {
          options.push(attribute.option);
        });
        return compareTwoArrays(values, options);
      });
      this.selectedVariation = selectedVariation.length
        ? {
            name: this.product.name,
            ...selectedVariation[0]
          }
        : null;
    },
    attProductInformation() {
      if (this.selectedVariation) {
        this.isAvailable = true;
        this.price = Number(this.selectedVariation.price);
        this.description = removeHTMLElements(
          this.selectedVariation.description
        );
      } else {
        this.isAvailable = false;
        this.description = "Indisponível no momento";
      }
    },
    changeAttribute() {
      const refs = this.$refs;
      let values = [];
      for (let ref in refs) {
        values.push(refs[ref][0].value);
      }
      this.getProductVariation(values);
      this.attProductInformation();
    },
    addToCart() {
      const itemToAddInCart = this.selectedVariation
        ? this.selectedVariation
        : this.product;
      this.$store.dispatch("addItemToCart", itemToAddInCart);
    }
  },
  filters: {
    formatLabelName(text) {
      return text.replace(/-/g, " ");
    }
  },
  watch: {
    product() {
      if (Object.keys(this.product).length) {
        this.isAvailable = true;
        this.selectedVariation = null;
        this.price = Number(this.product.price);
        this.description = removeHTMLElements(this.product.description);
        this.attributes = this.product.attributes;
        if (this.product.variations.length) this.getProductVariations();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.informations {
  width: 50%;

  .name {
    @include font;
    font-weight: bold;
    font-size: 2rem;
    color: $primary_color;
    margin-bottom: 30px;
  }

  .price {
    @include font;
    font-weight: bold;
    font-size: 1.5rem;
    font-style: italic;
    color: $price_color;
    margin-bottom: 45px;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin-top: 5px;
      background: $price_color;
    }
  }
}

.select {
  &__container {
    margin-bottom: 15px;
    display: grid;
    align-items: center;
    grid-template-columns: 200px 1fr;
  }

  &__label {
    text-transform: uppercase;
    font-style: italic;
  }

  &__hook {
    border: none;
    @include shadow_default;
    border-radius: 4px;
    padding: 5px;
    height: 45px;
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      @include shadow_grown;
    }
  }

  &__option {
    margin-top: 5px;
  }
}

.description {
  margin-top: 45px;
  height: 100px;
  @include font;
  font-size: 1rem;
  font-weight: 1.2rem;
  line-height: 1.8rem;
}

.btn {
  @include button;
  margin: 0 auto;
  margin-top: 30px;

  &.disabled {
    background: #4545;
    cursor: default;
    &:hover {
      transform: scale(1);
    }
  }
}
</style>