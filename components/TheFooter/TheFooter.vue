<template>
  <footer id="TheFooter" class="d-flex flex-column justify-space-between pa-10 pa-md-2">
    <v-container class="footer mt-7">
      <v-layout row class="mb-6">
        <v-col cols="12" sm="6">
          <v-img contain :src="logo" alt="SignBees logo" width="139px" height="39px" />
        </v-col>
        <v-col class="d-flex justify-start justify-sm-end" cols="12" sm="6">
          <nuxt-link class="mr-4" v-for="(item, i) in social" :key="i" :to="item.link">
            <v-img :src="item.logoSrc" contain width="30px" height="30px" />
          </nuxt-link>
        </v-col>
      </v-layout>

      <v-layout row>
        <v-col cols="12" sm="3">
          <h3 class="footer__link-title mb-2">Company</h3>
          <v-sheet class="d-flex flex-column align-start">
            <nuxt-link
              class="grey--text signbees-link"
              v-for="(item, i) in companyLinks"
              :to="item.link"
              :key="i"
            >{{ item.text }}</nuxt-link>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="5">
          <h3 class="footer__link-title mb-2">Links</h3>
          <v-sheet class="d-flex flex-column align-start">
            <nuxt-link
              class="grey--text signbees-link"
              v-for="(item, i) in extraLinks"
              :to="item.link"
              :key="i"
            >{{ item.text }}</nuxt-link>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="4">
          <h3 class="footer__link-title mb-2">Address</h3>
          <p
            class="grey--text"
          >Registered address: 2nd floor, Purva Premiere, Cowrks, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</p>
        </v-col>
      </v-layout>
    </v-container>

    <v-sheet>
      <v-divider />
      <v-container class>
        <p class="grey--text mb-0 caption">Copyright &copy; 2019 Vizmo. All rights reserved.</p>
      </v-container>
    </v-sheet>
  </footer>
</template>

<script>
import logo from "~/assets/img/logo.png";
import fb from "~/assets/img/fb.png";
import twitter from "~/assets/img/twitter.png";
import linkedIn from "~/assets/img/linkedin.png";
import insta from "~/assets/img/instagram.png";

export default {
  data() {
    return {
      logo,
      social: [
        { logoSrc: fb, link: "/" },
        { logoSrc: twitter, link: "/" },
        { logoSrc: linkedIn, link: "/" },
        { logoSrc: insta, link: "/" }
      ],
      companyLinks: [
        { text: "About us", link: "/about" },
        { text: "Contact us", link: "/contact" },
        { text: "Where to use", link: "#" }
      ],
      extraLinks: [
        { text: "How it works", link: "#" },
        { text: "Features", link: "#" },
        { text: "Price", link: "#" }
      ]
    };
  }
};
</script>

<style lang="scss">
#TheFooter {
  min-height: 421px;
}

.footer {
  line-height: 26px;

  &__link-title {
    font-size: 17px;
    font-weight: 500;
  }
}
</style>