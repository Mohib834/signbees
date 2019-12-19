<template>
  <main id="pricing-page" class="main">
    <section id="section-intro">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="display-1 text-center font-weight-medium mb-3">Pricing</h1>
            <p
              class="section-sub-heading ma-auto text-center"
              style="font-size:15px; max-width:678px;"
            >Signbees was created to help businesses deliver dynamic content at the right place, at the right time for maximum impact.</p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="section-pricing" class="pb-12 mb-10 mt-0 mt-sm-3">
      <v-container>
        <v-row class="mb-12">
          <v-col cols="12" md="5" class="offset-md-1 mb-6">
            <PricingCard :pricingData="pricingDataMonthly" />
          </v-col>
          <v-col cols="12" md="5">
            <PricingCard :pricingData="pricingDataAnnually" />
          </v-col>
        </v-row>

        <v-row class="my-6 my-sm-2">
          <v-col>
            <h1
              class="display-1 font-weight-medium text-center features-title"
            >Features Available on All Plans</h1>
          </v-col>
        </v-row>

        <v-row wrap class="pa-0 pa-md-12">
          <v-col class="d-flex" cols="12" md="6" v-for="(feature, i) in features" :key="i">
            <v-img
              style="position:relative; top:5px"
              contain
              width="28px"
              height="28px"
              :src="require('~/assets/img/pricing/tick.png')"
              :srcset="`${require('~/assets/img/pricing/tick@2x.png')} 2x, ${require('~/assets/img/pricing/tick@3x.png')} 3x`"
            ></v-img>
            <v-flex style="width:80%">
              <h2 class="heading d-flex align-center mb-2">
                <span>{{ feature.title }}</span>
              </h2>
              <p
                class="font-weight-medium"
                style="font-size: 15px; opacity:.5; line-height:22px; color:#515151"
              >{{ feature.text }}</p>
            </v-flex>
          </v-col>
        </v-row>
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
  margin: 0;
}

@media (max-width: 700px) {
  .features-title {
    font-size: 30px !important;
  }
}
</style>