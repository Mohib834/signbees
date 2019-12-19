<template>
  <main id="how-it-works-page">
    <SectionBanner>
      <template slot="title">How it works</template>
      <template slot="sub-text">We make all that complicated stuff, Simple!</template>
    </SectionBanner>

    <section>
      <BeeComponent>Impact your customers and or employees with all your digital content in just 3 steps.</BeeComponent>
    </section>

    <section class="section-showcase d-flex justify-center flex-column">
      <v-container>
        <v-row class="pa-10 pa-md-2 mb-n10 mt-8">
          <v-col cols="12">
            <h2 class="section-heading text-center mb-0 mb-sm-5">Android TV</h2>
          </v-col>
        </v-row>
        <v-row class="pa-10 pa-md-2 pt-0 mb-10">
          <v-col cols="12" class="pb-0 pb-md-2">
            <v-img
              contain
              :src="require('~/assets/img/how-it-works/android.png')"
              class="mb-10 mb-sm-0"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="mb-10">
          <v-col class="text-center">
            <h1 class="display-1">Don't have an Android TV?</h1>
            <h1 class="display-1 mb-5">We've got you covered!</h1>
            <p class="my-0 section-sub-heading">
              All you need is an
              <a
                href="https://bit.ly/2Vb6Wg3"
                target="_blank"
              >Airtel Xstream Stick</a> or the
              <a href="https://amzn.to/2oV72fr" target="_blank">Amazon Fire TV Stick</a> connected to your HDMI TV!
            </p>
            <p class="my-0 section-sub-heading">Follow the same steps above and you're done!</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script>
import SectionBanner from "~/components/Ui/SectionBanner/SectionBanner";
import BeeComponent from "~/components/Ui/BeeComponent/BeeComponent";

export default {
  components: {
    SectionBanner,
    BeeComponent
  }
};
</script>

<style lang="scss" scoped>
.section-showcase {
  min-height: 600px;
}

.oval {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  min-width: 27px;
  min-height: 27px;
  background-color: #7c7c7c;
  opacity: 1;
}
</style>