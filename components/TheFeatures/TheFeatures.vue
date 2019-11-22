<template>
  <v-container class="TheFeatures pa-10 pa-md-2 py-md-3">
    <v-layout row class="mb-4" style="flex:0">
      <v-col col="12">
        <h2 class="section-heading text-center">Why Choose Signbees?</h2>
      </v-col>
    </v-layout>
    <v-layout row style="flex:0">
      <v-col v-for="(feature, i) in features" :key="i" cols="12" sm="6" md="4">
        <v-card class="TheFeatures__card pa-3 pa-sm-1" height="327px">
          <v-card-title>{{ feature.title }}</v-card-title>
          <v-card-text class="TheFeatures__cardText" v-html="feature.content"></v-card-text>
          <v-img
            class="TheFeatures__cardImg"
            :src="feature.imgSrc"
            alt
            contain
            width="188.1px"
            height="136.4px"
          />
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import feature1 from "~/assets/img/feature-1.png";
import feature2 from "~/assets/img/feature-2.png";
import feature3 from "~/assets/img/feature-3.png";
import feature4 from "~/assets/img/feature-4.png";
import feature5 from "~/assets/img/feature-5.png";
import feature6 from "~/assets/img/feature-6.png";

export default {
  data() {
    return {
      features: [
        {
          title: "Cloud Based Software",
          content:
            "One login at Signbees.com accessible from anywhere. Automatic free software updates, zero software infrastructure to maintain and software that works wherever and whenever you work",
          imgSrc: feature1
        },
        {
          title: "Easy-to-use",
          content:
            "Whether it’s 3 or 300. If you have multiple screens you need a clever way to manage every one of them. Our drag & drop interface turns the complex task of publishing local and global playlists simultaneously into a simple task.",
          imgSrc: feature2
        },
        {
          title: "Simple, scalable",
          content:
            "Signbees helps businesses to turn any TV into a dynamic digital signage with limited or no hardware. Having access to our centralized platform, you can add more screens based on your requirements with a breeze. ",
          imgSrc: feature3
        },
        {
          title: "No hidden fees, no surprises",
          content:
            "Buy with confidence! Our pricing model is simple, straightforward and completely transparent. You buy the subscription and pay a flat monthly/annual fee. That’s it! <span class='d-block mt-5'>There are no “content change fees” or “hosting fees”</span>",
          imgSrc: feature4
        },
        {
          title: "Lower deployment costs",
          content:
            "Getting started with digital signage used to be an IT challenge and a business owner’s nightmare.  Signbees helps you reduce deployment costs and dramatically simplify a national roll out.",
          imgSrc: feature5
        },
        {
          title: "Highly reliable",
          content:
            "Our solution is built to reduce external factor influence to the limits. Nothing to panic when the screen goes offline. Your screens will playback a chosen content in offline mode.",
          imgSrc: feature6
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.TheFeatures {
  min-height: 952px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__card {
    position: relative;
  }

  &__cardImg {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &__cardText {
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.21px;
    position: relative;
    z-index: 2;
  }
}
</style>