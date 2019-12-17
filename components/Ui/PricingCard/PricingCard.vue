<template>
  <v-card
    outlined
    width="463px"
    class="pa-2 pb-8 mx-auto"
    :class="{'grow': pricingData.recommended}"
    :elevation="pricingData.recommended ? '4' : '1'"
  >
    <v-card-title
      class="d-flex align-center justify-center font-weight-bold"
      style="height:111px; font-size:21px"
    >{{pricingData.title}}</v-card-title>
    <v-divider style="border-color: #dbdbdb"></v-divider>
    <v-card-title
      style="height:187px"
      class="display-3 font-weight-bold d-flex align-center justify-center"
    >
      <span style="font-size:26px" class="font-weight-light mb-n5 ml-n12 mr-2">Rs.</span>
      <span>{{pricingData.amount}}</span>
    </v-card-title>
    <v-alert
      v-if="pricingData.recommended"
      style="color: #ffb800; border: solid 1px rgba(255, 184, 0, 0.26);"
      dense
      max-width="339px"
      color="rgba(255, 184, 0, 0.04)"
      class="text-uppercase mx-auto text-center mt-n10 font-weight-medium"
    >recommended</v-alert>
    <v-card-actions class="d-flex justify-center mt-6">
      <v-btn
        href="/signup"
        nuxt
        style="border-radius: 2px; font-size:19px; border:2px solid rgba(0,0,0,.27)"
        height="65px"
        width="371px"
        :outlined="!pricingData.recommended"
        class="text-capitalize font-weight-bold"
        :color="pricingData.recommended ? 'primary' : null"
      >Sign Up Today</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    pricingData: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.grow {
  transform: scale(1.06);
  margin-left: 5px;
  border: 1px solid #ff843b !important;

  @media (max-width: 900px) {
    transform: scale(1);
    border: none;
  }
}
</style>