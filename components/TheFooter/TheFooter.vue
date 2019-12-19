<template>
  <footer id="TheFooter" class="d-flex flex-column justify-space-between pa-10 pa-md-2">
    <v-container class="footer mt-7">
      <v-row class="mb-6">
        <v-col cols="12" sm="6">
          <v-img contain :src="logo" alt="SignBees logo" width="139px" height="39px" />
        </v-col>
        <v-col class="d-flex justify-start justify-sm-end" cols="12" sm="6">
          <a
            class="social-link mr-4"
            target="_blank"
            v-for="(item, i) in social"
            :key="i"
            :href="item.link"
          >
            <v-icon size="20" color="white">mdi-{{item.icon}}</v-icon>
          </a>
        </v-col>
      </v-row>

      <v-row>
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
            class="grey--text mb-0"
          >Registered address: 2nd floor, Purva Premiere, Cowrks, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</p>
          <v-list class="pa-0">
            <v-list-item class="pl-0 mb-n3">
              <v-icon class="mr-2" size="20">mdi-email</v-icon>
              <p class="grey--text ma-0">support@signbees.com</p>
            </v-list-item>
            <v-list-item class="pl-0 mb-n3">
              <v-icon class="mr-2" size="20">mdi-email</v-icon>
              <p class="grey--text ma-0">sales@signbees.com</p>
            </v-list-item>
            <v-list-item class="pl-0">
              <v-icon class="mr-2" size="20">mdi-phone</v-icon>
              <p class="grey--text ma-0">6364556030</p>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
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
        { icon: "facebook", link: "https://www.facebook.com/signbeesPvtLtd/" },
        { icon: "twitter", link: "https://twitter.com/signbees" },
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/company/20473059/admin/"
        },
        {
          icon: "instagram",
          link: "https://www.instagram.com/signbees.digitalsignage/"
        }
      ],
      companyLinks: [
        { text: "About us", link: "/about" },
        { text: "Contact us", link: "/contact" },
        { text: "Term of usage", link: "/term-of-usage" }
      ],
      extraLinks: [
        { text: "How it works", link: "/how-it-works" },
        { text: "Features", link: "/features" },
        { text: "Pricing", link: "/pricing" },
        { text: "Where to use", link: "/where" },
        { text: "Privacy Policy", link: "/privacy-policy" }
      ]
    };
  }
};
</script>

<style lang="scss">
#TheFooter {
  min-height: 421px;

  .social-link {
    width: 35px;
    height: 35px;
    display: flex;
    background: #aeaeae;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    border-bottom: 0;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      background: #feb800;
    }
  }
}

.footer {
  line-height: 26px;

  &__link-title {
    font-size: 17px;
    font-weight: 500;
  }
}
</style>