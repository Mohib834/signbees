<template>
  <v-app-bar height="80" app elevation="0">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-container>
      <v-layout row>
        <v-col cols="2" md="4">
          <v-toolbar-title>
            <nuxt-link to="/">
              <v-img contain :src="logo" alt="SignBees logo" width="139px" height="39px" />
            </nuxt-link>
          </v-toolbar-title>
        </v-col>
        <v-col cols="10" md="8" class="d-flex align-center justify-end">
          <v-toolbar-items style="height:100%">
            <v-btn text color="transparent" v-for="(menuItem, i) in menu" :key="i">
              <nuxt-link
                class="signbees-link text-capitalize black--text"
                :to="menuItem.link"
              >{{ menuItem.item }}</nuxt-link>
            </v-btn>
            <v-btn text color="transparent">
              <nuxt-link to="/signin" class="signbees-link text-capitalize">sign in</nuxt-link>
            </v-btn>
            <v-btn
              class="ml-4 text-capitalize"
              href="/signup"
              nuxt
              color="primary"
              style="border-radius: 2px"
              height="48px"
            >Sign up free</v-btn>
          </v-toolbar-items>
        </v-col>
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
import logo from "~/assets/img/logo.png";

export default {
  data() {
    return {
      logo,
      menu: [
        { item: "How it works", link: "/how-it-works" },
        { item: "Features", link: "/features" },
        { item: "Pricing", link: "/pricing" },
        { item: "About us", link: "/about" }
      ]
    };
  }
};
</script>