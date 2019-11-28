<template>
  <v-card
    outlined
    width="463px"
    height="1240px"
    class="pa-2 mx-auto"
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
    <v-card-text class="pa-0 pa-sm-4">
      <v-list v-for="(feature, i) in features" :key="i">
        <v-list-item three-line class="mb-3">
          <v-list-item-content class="pa-0">
            <v-row no-gutters>
              <v-col cols="2" class="mr-0 mr-sm-n4">
                <v-img
                  contain
                  width="28px"
                  height="28px"
                  :src="require('~/assets/img/pricing/tick.png')"
                  :srcset="`${require('~/assets/img/pricing/tick@2x.png')} 2x, ${require('~/assets/img/pricing/tick@3x.png')} 3x`"
                ></v-img>
              </v-col>
              <v-col cols="10">
                <h2 style="font-size:21px" class="d-flex align-center mb-2">
                  <span>{{ feature.title }}</span>
                </h2>
                <p
                  class="font-weight-medium"
                  style="font-size: 15px; opacity:.5; line-height:22px; color:#515151"
                >{{ feature.text }}</p>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
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
    return {
      features: [
        {
          title: "Status and Preview",
          text: "Monitor your screens and see what’s playing in real-time"
        },
        {
          title: "Unlimited apps",
          text:
            "Forget limitations! Feel free to use as many apps as you'd like"
        },
        {
          title: "Unlimited Storage",
          text:
            "Store all your creatives securely in the cloud. Never worry about storage space."
        },
        {
          title: "Content Schedular",
          text:
            "Set dates and times for when you'd like your content to display."
        },
        {
          title: "Multi-location ready",
          text:
            "Change content on the fly to as many screens as you'd like, regardless of the location."
        },
        {
          title: "Multiple File Support",
          text:
            "Display a JPG, PNG, PDF, PPT, MP4, or any other media type on your screens."
        }
      ]
    };
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