<template>
  <main>
    <section id="section-home-banner">
      <v-row style="height:100%" class="pa-10 pa-md-2">
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
              >
                <v-icon class="mr-2">mdi-email</v-icon>Sign up with email
              </v-btn>
            </v-sheet>
          </v-flex>
        </v-col>
        <v-col class="pa-0 d-none d-sm-block" cols="0" sm="6">
          <v-img :src="banner" height="100%" />
        </v-col>
      </v-row>
    </section>

    <section id="section-how-it-works">
      <v-container fluid>
        <v-layout row>
          <v-col offset="6">
            <h2 class="section-heading-title">How it Works</h2>
          </v-col>
        </v-layout>
        <v-layout row>
          <v-col sm="6">
            <v-img class="ml-n3" :src="dashboardImg" alt contain width="684px" height="471px"></v-img>
          </v-col>
          <v-col sm="6">
            <ul style="list-style:none" class="pl-0 mt-8">
              <li>
                <h2 class="title">1. Create</h2>
                <p
                  style="width:381px"
                >Create playlists in few clicks and manage all your screens in real-time through your Signbees Dashboard using any browser on PC or Tablet.</p>
              </li>
              <li>
                <h2 class="title">2. Distribute</h2>
                <p
                  style="width:381px"
                >Manage, distibute and Update content on your screens on the fly whereever they are located in real time.</p>
              </li>
            </ul>
          </v-col>
        </v-layout>
      </v-container>
    </section>

    <section id="section-content-manager">
      <ContentManagerTabs />
    </section>

    <section id="section-ad">
      <v-container style="min-height:760px" class="d-flex align-center">
        <v-layout row class="pa-10 pa-md-2">
          <v-col cols="12" md="6">
            <v-img :src="adImg" alt contain height="477px"></v-img>
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

            <v-img :src="appImg" contain />

            <h4 class="subtitle-1 grey--text mt-5 mb-3">Coming Soon</h4>

            <v-sheet class="d-flex mb-12 pb-4 ml-1">
              <img
                class="mr-7"
                v-for="(app, i) in upcomingApp"
                :key="i"
                :src="app.imgSrc"
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
              width="220px"
            >
              Get Your Free Trial
              <v-icon size="30px" class="mr-n3">mdi-menu-right</v-icon>
            </v-btn>
          </v-col>
        </v-layout>
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
        <v-layout row style="height:100%">
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

            <CtaForm />
          </v-col>
          <v-col cols="12" md="6" class="pa-0 d-flex justify-end" align-self="end">
            <v-img :src="manImg" width="436px" height="383px" contain></v-img>
          </v-col>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>

<script>
import TheFeatures from "~/components/TheFeatures/TheFeatures";
import CtaForm from "~/components/Ui/CtaForm/CtaForm";
import PlaceSlider from "~/components/Ui/PlaceSlider/PlaceSlider";
import ContentManagerTabs from "~/components/Ui/ContentManagerTabs/ContentManagerTabs";

import banner from "~/assets/img/banner.png";
import googleIcon from "~/assets/img/google.png";
import manImg from "~/assets/img/man.png";
import adImg from "~/assets/img/ad.png";
import appImg from "~/assets/img/apps.png";
import fb from "~/assets/img/facebook-shaded.png";
import twitter from "~/assets/img/twitter-shaded.png";
import owl from "~/assets/img/owl-shaded.png";
import dashboardImg from "~/assets/img/dashboard.png";

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
      googleIcon,
      manImg,
      adImg,
      appImg,
      dashboardImg,
      upcomingApp: [{ imgSrc: fb }, { imgSrc: twitter }, { imgSrc: owl }]
    };
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
  height: 672px;
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