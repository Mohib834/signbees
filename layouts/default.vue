<template>
  <v-app class="black--text">
    <TheHeader @openDrawer="drawer = !drawer" :menu="menu" />
    <v-navigation-drawer v-model="drawer" temporary fixed style="z-index: 1000;">
      <v-list dense>
        <v-list-item class="mb-6 mt-2">
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
        </v-list-item>
        <v-list-item
          v-for="(item,i) in menu"
          :key="i"
          nuxt
          :to="item.link"
          class="mb-2 px-6"
          style="font-size:20px"
        >{{item.item}}</v-list-item>
        <v-list-item v-if="!isUserLoggedIn" class="mt-6 px-6 d-flex flex-column">
          <v-btn text color="transparent" block outlined class="mb-4">
            <a
              href="https://dashboard.beta.signbees.com/"
              class="signbees-link text-capitalize"
            >sign in</a>
          </v-btn>
          <v-btn
            block
            class="text-capitalize"
            to="/signup"
            nuxt
            color="primary"
            style="border-radius: 2px"
            height="40px"
          >Sign up free</v-btn>
        </v-list-item>
        <v-list-item v-else class="mt-6 px-6">
          <v-btn
            block
            class="text-capitalize"
            href="https://dashboard.beta.signbees.com"
            color="primary"
            style="border-radius: 2px"
            height="40px"
          >Go to dashboard</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <nuxt />
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "~/components/TheHeader/TheHeader";
import TheFooter from "~/components/TheFooter/TheFooter";
import { openDB } from "idb";
import { auth } from "~/plugins/firebase.js";
import { mapGetters } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      drawer: false,
      menu: [
        { item: "How it works", link: "/how-it-works" },
        { item: "Features", link: "/features" },
        { item: "Pricing", link: "/pricing" },
        { item: "About us", link: "/about" }
      ]
    };
  },
  computed: {
    ...mapGetters(["isUserLoggedIn"])
  },
  mounted() {
    window.addEventListener(
      "message",
      async e => {
        if (e.origin === "https://sso.beta.signbees.com") {
          const storeName = "firebaseLocalStorage";
          const db = await openDB("firebaseLocalStorageDb", 1);
          const tx = db.transaction(storeName, "readwrite");
          const store = tx.objectStore(storeName);
          await store.put(e.data.data);
          tx.done;
        }
      },
      false
    );

    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.commit("changeUserLoginStatus", true);
        this.$store.commit("changeLoadingStatus", false);
      }
    });
  }
};
</script>
