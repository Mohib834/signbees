<template>
  <main>
    <section id="section-home-banner" class="d-flex" style="position:relative">
      <v-container fluid class="pa-0">
        <v-row style="height:100%" class="pa-10 pa-sm-2 pa-md-2">
          <v-col
            cols="12"
            offset="0"
            class="offset-sm-1 offset-md-2 offset-lg-1 d-flex align-center pa-0"
            sm="5"
            md="4"
            lg="5"
          >
            <v-flex class>
              <h1
                class="display-1 font-weight-medium mb-3"
              >Transforming TV Screens into Effective Engagement Machines</h1>
              <p
                class="banner__subtext grey--text pr-3"
                style="max-width:510px;"
              >A simple, scalable, and cost effective cloud digital signage for your business to increase brand awareness, reputation, trust, and sales.</p>
              <v-sheet class="banner__button-container">
                <v-btn
                  href="#"
                  nuxt
                  style="border-radius: 2px; text-transform: none"
                  color="primary"
                  height="48px"
                  width="220px"
                  v-if="!isUserLoggedIn"
                >
                  <v-icon class="mr-2">mdi-email</v-icon>Sign up with email
                </v-btn>
              </v-sheet>
            </v-flex>
          </v-col>
          <v-col class="pa-0 d-none d-sm-block" cols="0" sm="6">
            <v-img :src="banner" :srcset="bannerSrcSet" height="100%" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="section-how-it-works" style="position:relative; margin-bottom:100px">
      <v-container fluid>
        <v-row class="mb-n5">
          <v-col cols="12" md="6" class="offset-md-6 text-center text-sm-left">
            <h2 class="section-heading">How it Works</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="6">
            <v-img
              class="ml-n3"
              :src="dashboardImg"
              :srcset="dashboardImgSrcSet"
              alt
              contain
              width="684px"
              height="471px"
              style
            ></v-img>
          </v-col>
          <v-col sm="1" class="mt-3 d-flex justify-center flex-column">
            <div>
              <v-img
                height="66px"
                contain
                style="z-index: 10"
                class="mb-n3"
                :src="require('~/assets/img/create.png')"
                :srcset="`${require('~/assets/img/create@2x.png')} 2x, ${require('~/assets/img/create@3x.png')} 3x`"
              ></v-img>
              <v-img
                height="70px"
                contain
                :src="require('~/assets/img/line.png')"
                :srcset="`${require('~/assets/img/line@2x.png')} 2x, ${require('~/assets/img/line@3x.png')} 3x`"
              ></v-img>

              <v-img
                height="42px"
                contain
                class="mt-n3 mb-n3"
                style="z-index:10"
                :src="require('~/assets/img/cloud.png')"
                :srcset="`${require('~/assets/img/cloud@2x.png')} 2x, ${require('~/assets/img/cloud@3x.png')} 3x`"
              ></v-img>

              <v-img
                height="70px"
                contain
                :src="require('~/assets/img/line.png')"
                :srcset="`${require('~/assets/img/line@2x.png')} 2x, ${require('~/assets/img/line@3x.png')} 3x`"
              ></v-img>
              <v-img
                height="80px"
                contain
                class="mt-n3"
                :src="require('~/assets/img/distribute.png')"
                :srcset="`${require('~/assets/img/distribute@2x.png')} 2x, ${require('~/assets/img/distribute@3x.png')} 3x`"
              ></v-img>
            </div>
          </v-col>
          <v-col sm="5" class="mt-3">
            <ul
              style="list-style:none; height:100%"
              class="pl-0 d-flex flex-column justify-space-around"
            >
              <li class="mt-n5">
                <h2 class="title">1. Create</h2>
                <p
                  style="font-size: 15px; max-width:381px"
                >Create playlists in few clicks and manage all your screens in real-time through your Signbees Dashboard using any browser on PC or Tablet.</p>
              </li>
              <li class="mb-n6">
                <h2 class="title">2. Distribute</h2>
                <p
                  style="font-size: 15px; max-width:381px"
                >Manage, distibute and Update content on your screens on the fly whereever they are located in real time.</p>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="section-content-manager" style="min-height:650px; margin-bottom:100px">
      <ContentManagerTabs />
    </section>

    <section id="section-ad" class="my-10">
      <v-container style="min-height:760px" class="d-flex align-center">
        <v-row class="pa-10 pa-md-2">
          <v-col cols="12" md="6">
            <v-img :src="adImg" :srcset="adImgSrcSet" alt contain max-height="477px"></v-img>
          </v-col>
          <v-col cols="12" md="6" class="text-left">
            <h2 class="section-heading mb-6">Free Apps</h2>
            <p
              class="section-sub-heading"
            >Use our social media, information, and entertainment apps to publish feeds, broadcast popular news and infotainment channels.</p>
            <p
              class="section-sub-heading"
            >We constantly expand this section with interesting and useful apps, watch this space for updates.</p>
            <h3 class="title mb-3" style="color:#010101">Available Apps</h3>

            <v-img :src="appImg" :srcset="appImgSrcSet" contain />

            <h4 class="subtitle-1 grey--text mt-5 mb-3">Coming Soon</h4>

            <v-sheet class="d-flex mb-12 pb-4 ml-1">
              <img
                class="mr-7"
                v-for="(app, i) in upcomingApp"
                :key="i"
                :src="app.imgSrc"
                :srcset="app.imgSrcSet"
                alt
                style="object-fit:contain"
              />
            </v-sheet>

            <v-btn
              href="#"
              nuxt
              style="border-radius: 2px; text-transform: none"
              color="primary"
              height="48px"
              width="236px"
            >
              Connect to signbees now
              <v-icon size="30px" class="mr-n3">mdi-menu-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="where">
      <PlaceSlider />
    </section>

    <section id="section-features">
      <TheFeatures />
    </section>

    <section id="section-cta-banner">
      <v-container class="py-0" style="height:100%">
        <v-row style="height:100%">
          <v-col
            cols="12"
            md="6"
            class="d-flex flex-column justify-center pa-10 pa-md-2 text-center text-md-left"
          >
            <h3
              class="headline mb-5 font-weight-medium"
            >We take great care of our users and work alongside you each step of the way to ensure success.</h3>
            <p
              class="cta-banner__sub-heading"
              style="font-size:17px;"
            >Subscribe to our newsletter for tips, ideas, and your industry related news.</p>
            <!-- 
            <CtaForm />-->
          </v-col>
          <v-col cols="12" md="6" class="pa-0 d-flex justify-end" align-self="end">
            <v-img :src="manImg" :srcset="manImgSrcSet" width="436px" height="383px" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import TheFeatures from "~/components/TheFeatures/TheFeatures";
import CtaForm from "~/components/Ui/CtaForm/CtaForm";
import PlaceSlider from "~/components/Ui/PlaceSlider/PlaceSlider";
import ContentManagerTabs from "~/components/Ui/ContentManagerTabs/ContentManagerTabs";

// images import

import banner from "~/assets/img/banner.png";
import banner2x from "~/assets/img/banner@2x.png";
import banner3x from "~/assets/img/banner@3x.png";

import manImg from "~/assets/img/man.png";
import manImg2x from "~/assets/img/man@2x.png";
import manImg3x from "~/assets/img/man@3x.png";

import adImg from "~/assets/img/ad.png";
import adImg2x from "~/assets/img/ad@2x.png";
import adImg3x from "~/assets/img/ad@3x.png";

import appImg from "~/assets/img/apps.png";
import appImg2x from "~/assets/img/apps@2x.png";
import appImg3x from "~/assets/img/apps@2x.png";

import twitter from "~/assets/img/twitter-shaded.png";
import twitter2x from "~/assets/img/twitter-shaded@2x.png";
import twitter3x from "~/assets/img/twitter-shaded@3x.png";

import owl from "~/assets/img/owl-shaded.png";
import owl2x from "~/assets/img/owl-shaded@2x.png";
import owl3x from "~/assets/img/owl-shaded@3x.png";

import dashboardImg from "~/assets/img/dashboard.png";
import dashboardImg2x from "~/assets/img/dashboard@2x.png";
import dashboardImg3x from "~/assets/img/dashboard@3x.png";

import fb from "~/assets/img/fb-shaded.png";
import fb2x from "~/assets/img/fb-shaded@2x.png";
import fb3x from "~/assets/img/fb-shaded@3x.png";

export default {
  components: {
    CtaForm,
    TheFeatures,
    PlaceSlider,
    ContentManagerTabs
  },

  data() {
    return {
      banner,
      bannerSrcSet: `${banner2x} 2x, ${banner3x} 3x`,
      manImg,
      manImgSrcSet: `${manImg2x} 2x, ${manImg3x} 3x`,

      adImg,
      adImgSrcSet: `${adImg2x} 2x, ${adImg3x} 3x`,

      appImg,
      appImgSrcSet: `${appImg2x} 2x, ${appImg3x} 3x`,

      dashboardImg,
      dashboardImgSrcSet: `${dashboardImg2x} 2x, ${dashboardImg3x} 3x`,

      upcomingApp: [
        { imgSrc: fb, imgSrcSet: `${fb2x} 2x, ${fb3x} 3x` },
        { imgSrc: twitter, imgSrcSet: `${twitter2x} 2x, ${twitter3x} 3x` },
        { imgSrc: owl, imgSrcSet: `${owl2x} 2x, ${owl3x} 3x` }
      ]
    };
  },
  computed: {
    ...mapGetters(["isUserLoggedIn"])
  }
};
</script>

<style lang="scss">
#section-home-banner {
  height: 92.5vh;
}

#section-cta-banner {
  background: rgba(#ffbd72, 0.19);
}

#section-how-it-works {
  min-height: 672px;
  display: flex;
  align-items: center;
}

.banner {
  &__subtext {
    font-size: 17px;
  }

  &__container {
    display: flex;
  }
}

#section-ad .v-responsive__content {
  width: initial !important;
  max-width: 522px !important;
}

@media (min-width: 960px) {
  .cta-banner__sub-heading {
    width: 480px;
  }
}

@media (min-width: 1000px) {
  #section-cta-banner {
    height: 430px;
  }
}

@media (max-width: 1250px) {
  .banner {
    &__container {
      flex-direction: column;
    }
  }
}
</style>