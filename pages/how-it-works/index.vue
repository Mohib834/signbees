<template>
  <main id="how-it-works-page">
    <SectionBanner>
      <template slot="title">How it works</template>
      <template slot="sub-text">We make all that complicated stuff, Simple!</template>
    </SectionBanner>

    <section>
      <BeeComponent>Impact your customers and or employees with all your digital content in just 3 steps.</BeeComponent>
    </section>

    <section
      class="section-showcase d-flex justify-center flex-column"
      v-for="(item,i) in showcases"
      :key="i"
    >
      <v-container>
        <v-layout row class="pa-10 pa-md-2">
          <v-col cols="12">
            <h2 class="section-heading text-center mb-0 mb-sm-5">{{ item.title }}</h2>
          </v-col>
        </v-layout>
        <v-layout row class="pa-10 pa-md-2 pt-0">
          <v-col cols="12" class="pb-0 pb-md-2">
            <v-img
              contain
              width="1137px"
              max-height="233px"
              :src="item.imgSrc"
              :srcset="item.imgSrcSet"
              class="mb-10 mb-sm-0"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <v-container>
              <v-row class="mt-n6 mt-md-n2">
                <v-col
                  cols="12"
                  md="4"
                  v-for="(pt, i) in item.showcasePoint"
                  :key="i"
                  class="pt-0 mb-3 mb-sm-0 px-0 px-sm-2"
                >
                  <h4
                    class="section-sub-heading d-flex ml-md-9 ml-sm-0"
                    style="font-size:13px !important; opacity:.55;"
                  >
                    <span class="oval mr-4 mr-sm-2">{{ i + 1 }}</span>
                    {{ pt }}
                  </h4>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>

<script>
import SectionBanner from "~/components/Ui/SectionBanner/SectionBanner";
import BeeComponent from "~/components/Ui/BeeComponent/BeeComponent";

import androidImg from "~/assets/img/how-it-works/android.png";
import androidImg2x from "~/assets/img/how-it-works/android@2x.png";
import androidImg3x from "~/assets/img/how-it-works/android@3x.png";

import hdmiImg from "~/assets/img/how-it-works/hdmi.png";
import hdmiImg2x from "~/assets/img/how-it-works/hdmi@2x.png";
import hdmiImg3x from "~/assets/img/how-it-works/hdmi@3x.png";

export default {
  components: {
    SectionBanner,
    BeeComponent
  },
  data() {
    return {
      showcases: [
        {
          title: "Android TV",
          imgSrc: androidImg,
          imgSrcSet: `${androidImg2x} 2x, ${androidImg3x} 3x`,
          showcasePoint: [
            "Sign up to Signbees",
            "Install the signbees software from player.signbees.com onto your android tv screen",
            "Sign in to Signbees Content Manager to connect and manage all your screens using a browser on your pc or tablet"
          ]
        },
        {
          title: "HDMI TV",
          imgSrc: hdmiImg,
          imgSrcSet: `${hdmiImg2x} 2x, ${hdmiImg3x} 3x`,
          showcasePoint: [
            "Sign up to Signbees",
            "Install the signbees software from player.signbees.com onto your android tv screen",
            "Sign in to Signbees Content Manager to connect and manage all your screens using a browser on your pc or tablet"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.section-showcase {
  min-height: 600px;
  background-image: linear-gradient(to bottom, #ffffff, rgba(#ececec, 0.33));
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