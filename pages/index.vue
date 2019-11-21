<template>
  <main>
    <section id="home-banner">
      <v-row style="height:100%">
        <v-col
          cols="6"
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

              <v-btn
                class="ml-0 mt-4 mt-lg-0 ml-lg-3"
                href="#"
                nuxt
                style="border-radius: 2px; text-transform:none; border: 1px solid #202225 !important"
                height="48px"
                width="220px"
                color="transparent"
                elevation="0"
              >
                <v-img class="mr-2" :src="googleIcon" contain height="20px" width="20px"></v-img>Sign up with Google
              </v-btn>
            </v-sheet>
          </v-flex>
        </v-col>
        <v-col class="pa-0" cols="6" sm="6">
          <v-img :src="banner" height="100%" />
        </v-col>
      </v-row>
    </section>

    <section id="cta-banner">
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
import CtaForm from "~/components/Ui/CtaForm/CtaForm";

import banner from "~/assets/img/banner.png";
import googleIcon from "~/assets/img/google.png";
import manImg from "~/assets/img/man.png";

export default {
  components: {
    CtaForm
  },

  data() {
    return {
      banner,
      googleIcon,
      manImg
    };
  }
};
</script>

<style lang="scss">
#home-banner {
  height: 92.5vh;
}

#cta-banner {
  background: rgba(#ffbd72, 0.19);
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
  #cta-banner {
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