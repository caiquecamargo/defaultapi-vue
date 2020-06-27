<template>
  <footer>
    <p>{{year}}. {{company_name}} todos os direitos reservados. cnpj: {{cnpj}}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: "",
      company_name: "company name",
      cnpj: "00000000000/0000"
    };
  },
  methods: {
    getYear() {
      const date = new Date();
      this.year = date.getFullYear();
    }
  },
  created() {
    this.getYear();
  }
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: $header_background_color;
  color: #fff;
}
</style>