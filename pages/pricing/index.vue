<template>
  <main id="pricing-page">
    <section id="section-intro">
      <v-container>
        <v-layout>
          <v-col>
            <h1 class="display-1 text-center font-weight-medium mb-3">Pricing</h1>
            <p
              class="section-sub-heading ma-auto text-center"
              style="font-size:15px; max-width:678px;"
            >Signbees was created to help businesses deliver dynamic content at the right place, at the right time for maximum impact.</p>
          </v-col>
        </v-layout>
      </v-container>
    </section>

    <section id="section-pricing" class="pb-12 mb-10">
      <v-container>
        <v-layout row class="mb-12">
          <v-col cols="12" md="5" class="offset-md-1 mb-6">
            <PricingCard :pricingData="pricingDataMonthly" />
          </v-col>
          <v-col cols="12" md="5">
            <PricingCard :pricingData="pricingDataAnnually" />
          </v-col>
        </v-layout>
        <v-layout row>
          <v-col>
            <h1 class="display-1 text-center font-weight-medium">Features Available On All Plans</h1>
          </v-col>
        </v-layout>
        <v-layout row wrap style="max-width:990px" class="mx-auto pt-8 pa-sm-6">
          <v-col cols="12" md="6" v-for="(feature, i) in features" :key="i">
            <div class="d-flex">
              <div class="mr-4 mb-n6">
                <v-img contain :src="require('~/assets/img/pricing/tick.png')" />
              </div>
              <div>
                <h3>{{feature.title}}</h3>
                <p class="section-sub-heading">{{ feature.text }}</p>
              </div>
            </div>
          </v-col>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>

<script>
import PricingCard from "~/components/Ui/PricingCard/PricingCard";

export default {
  components: {
    PricingCard
  },
  data() {
    return {
      pricingDataMonthly: {
        title: "Monthly",
        amount: 699,
        recommended: false
      },
      pricingDataAnnually: {
        title: "Annual",
        amount: 6999,
        recommended: true
      },
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
#section-intro {
  height: 300px;
  display: flex;
  align-items: center;
}
</style>