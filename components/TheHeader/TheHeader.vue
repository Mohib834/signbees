<template>
  <v-app-bar height="80" app elevation="0" style="z-index:1000">
    <v-container>
      <v-row>
        <v-col cols="2" md="4">
          <v-toolbar-title class="d-none d-lg-block">
            <nuxt-link to="/">
              <v-img
                contain
                :src="require('~/assets/img/logo.png')"
                :srcset="`${require('~/assets/img/logo@2x.png')} 2x, ${require('~/assets/img/logo@3x.png')} 3x`"
                alt="SignBees logo"
                width="139px"
                height="39px"
              />
            </nuxt-link>
          </v-toolbar-title>
          <v-toolbar-title class="d-block d-lg-none">
            <v-app-bar-nav-icon class="hamburger-icon" @click="$emit('openDrawer')"></v-app-bar-nav-icon>
          </v-toolbar-title>
        </v-col>
        <v-col cols="10" md="8" class="d-flex align-center justify-end">
          <v-toolbar-items class="d-none d-lg-block" style="height:100%">
            <v-btn text color="transparent" v-for="(menuItem, i) in menu" :key="i">
              <nuxt-link
                class="signbees-link text-capitalize black--text"
                :to="menuItem.link"
              >{{ menuItem.item }}</nuxt-link>
            </v-btn>
            <template v-if="!isUserLoggedIn">
              <v-btn text color="transparent">
                <a :href="dashboardLink" class="signbees-link text-capitalize">sign in</a>
              </v-btn>
              <v-btn
                class="ml-4 text-capitalize"
                to="/signup"
                nuxt
                color="primary"
                style="border-radius: 2px"
                height="48px"
              >Sign up free</v-btn>
            </template>
            <template v-else>
              <v-btn
                class="ml-4 text-capitalize"
                :href="dashboardLink"
                color="primary"
                style="border-radius: 2px"
                height="48px"
              >Go to dashboard</v-btn>
            </template>
          </v-toolbar-items>
          <v-toolbar-items class="d-block d-lg-none">
            <nuxt-link to="/">
              <v-img
                contain
                :src="require('~/assets/img/logo.png')"
                :srcset="`${require('~/assets/img/logo@2x.png')} 2x, ${require('~/assets/img/logo@3x.png')} 3x`"
                alt="SignBees logo"
                width="139px"
                height="39px"
              />
            </nuxt-link>
          </v-toolbar-items>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["menu"],
  computed: {
    ...mapGetters(["isUserLoggedIn", "dashboardLink"])
  }
};
</script>

<style lang="scss">
.hamburger-icon i {
  width: 40px !important;
  height: 40px !important;
  font-size: 40px !important;
}
</style>