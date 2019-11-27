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
        <v-layout row>
          <v-col cols="12" md="5" class="offset-md-1 mb-6">
            <PricingCard :pricingData="pricingDataMonthly" />
          </v-col>
          <v-col cols="12" md="5">
            <PricingCard :pricingData="pricingDataAnnually" />
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
      }
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