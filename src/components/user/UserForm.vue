<template>
  <form class="user_form">
    <UserDataForm v-if="data" />
    <UserBillingForm v-if="billing" />
    <UserShippingForm v-if="shipping" />

    <div class="button">
      <slot />
    </div>
  </form>
</template>

<script>
import UserDataForm from "@/components/user/UserDataForm.vue";
import UserBillingForm from "@/components/user/UserBillingForm.vue";
import UserShippingForm from "@/components/user/UserShippingForm.vue";

export default {
  name: "UserForm",
  props: {
    data: {
      type: Boolean,
      default: false
    },
    billing: {
      type: Boolean,
      default: false
    },
    shipping: {
      type: Boolean,
      default: false
    }
  },
  components: {
    UserDataForm,
    UserBillingForm,
    UserShippingForm
  }
};
</script>

<style lang="scss" scoped>
.user_form {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  .button {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }
}
</style>