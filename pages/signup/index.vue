<template>
  <main id="signup-page">
    <v-card class="iframe-container">
      <iframe ref="iframe" src="https://sso.beta.signbees.com" width="100%" height="100%"></iframe>
    </v-card>
    <v-container>
      <v-layout row>
        <v-col>
          <v-card elevation="0" outlined class="pa-10">
            <v-layout row>
              <v-col col="12" md="6">
                <v-card-title class="d-flex flex-column align-start">
                  <h1 class="title font-weight-bold mb-4">Ready to meet Signbees</h1>
                  <div class="line-above"></div>
                </v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item
                      class="pl-0 mb-n1"
                      style="font-size:17px"
                      v-for="(item, i) in items"
                      :key="i"
                    >
                      <div>
                        <v-img
                          contain
                          width="17px"
                          height="17px"
                          class="mr-4"
                          :src="require('~/assets/img/pricing/tick.png')"
                          :srcset="`${require('~/assets/img/pricing/tick@2x.png')} 2x, ${'~/assets/img/pricing/tick@3x.png'} 3x`"
                        />
                      </div>
                      {{item}}
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-col>
              <v-col col="12" md="6" class="d-flex align-center">
                <v-form style="width:400px;" class="mx-auto" ref="form">
                  <div v-if="!signingUp">
                    <v-text-field
                      type="email"
                      outlined
                      elevation="0"
                      placeholder="Company Email"
                      v-model="userData.email"
                      :rules="rules.email"
                      style="border-radius:0"
                    ></v-text-field>
                    <p
                      class="subtitle-2 grey--text font-weight-medium mt-n2 mb-6"
                    >* We’ll never share your email with anyone else.</p>
                    <v-btn
                      style="border-radius: 2px; font-size:19px; border:2px solid rgba(0,0,0,.27)"
                      height="44px"
                      class="text-capitalize font-weight-bold mb-3"
                      color="primary"
                      block
                      @click="$refs.form.validate() ? signingUp = true : null"
                    >Get Started</v-btn>
                  </div>
                  <div v-else>
                    <v-layout row class="flex-column text-center">
                      <h2 class="section-sub-heading">Let's get you started</h2>
                      <p class="caption">Set up a password for your account</p>
                    </v-layout>
                    <v-layout row class="mb-n6">
                      <v-col class="px-0 pr-1">
                        <v-text-field
                          :rules="rules.name"
                          v-model="userData.firstName"
                          label="First Name"
                          outlined
                          dense
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-0">
                        <v-text-field
                          :rules="rules.name"
                          v-model="userData.lastName"
                          label="Last Name"
                          outlined
                          dense
                          type="text"
                        ></v-text-field>
                      </v-col>
                    </v-layout>
                    <v-layout row class="mb-n6">
                      <v-col class="px-0">
                        <v-text-field
                          :rules="rules.email"
                          v-model="userData.email"
                          disabled
                          label="Email"
                          outlined
                          dense
                          type="email"
                        ></v-text-field>
                      </v-col>
                    </v-layout>
                    <v-layout row class="mb-n6">
                      <v-col class="px-0">
                        <v-text-field
                          :rules="rules.password"
                          label="Password"
                          v-model="userData.password"
                          outlined
                          dense
                          type="password"
                        ></v-text-field>
                      </v-col>
                    </v-layout>
                    <v-layout row class="mb-n6">
                      <v-col class="px-0">
                        <v-text-field
                          :rules="rules.confirmPassword"
                          label="Confirm Password"
                          v-model="userData.confirmPassword"
                          outlined
                          dense
                          type="password"
                        ></v-text-field>
                      </v-col>
                    </v-layout>
                    <v-layout row class>
                      <v-col class="px-0">
                        <v-btn
                          style="border-radius: 2px; font-size:19px; border:2px solid rgba(0,0,0,.27)"
                          height="44px"
                          class="text-capitalize font-weight-bold mb-3"
                          color="primary"
                          block
                          :loading="loading"
                          @click="signUp"
                        >Let's Go!</v-btn>
                      </v-col>
                    </v-layout>
                  </div>
                  <v-layout row>
                    <v-col class>
                      <p class="subtitle-2">
                        By signing up, you agree to the
                        <nuxt-link to="/term-of-service" class="mr-1 signbees-link">Term of Service</nuxt-link>by Signbees.
                      </p>
                      <p class="subtitle-2">
                        Already have an account ?
                        <nuxt-link to="/signin" class="signbees-link">Login</nuxt-link>
                      </p>
                    </v-col>
                  </v-layout>
                </v-form>
              </v-col>
            </v-layout>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
import { openDb } from "idb";
import { mapGetters } from "vuex";

export default {
  async beforeMount() {
    const storeName = "firebaseLocalStorage";
    const db = await openDb("firebaseLocalStorageDb", 1);
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const data = await store.getAll();
    tx.done;

    if (data[0]) {
      window.location.replace("https://dashboard.beta.signbees.com/#/");
    }
  },
  data() {
    return {
      items: [
        "Initial set up process included",
        "14 days Free Trial",
        "Access to Premium Apps",
        "24*7 Dedicated Support",
        "No Card Required"
      ],
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      signingUp: false,
      rules: {
        name: [v => v.length === 0 && "Field cannot be left empty !"],
        email: [
          v => v.length === 0 && "Field cannot be left empty !",
          v => /.+@.+/.test(v) || "Invalid Email address"
        ],
        password: [
          v => v.length === 0 && "Field cannot be left empty !",
          v => v.length <= 8 && "Password should have more than 8 character !"
        ],
        confirmPassword: [
          v => v.length === 0 && "Field cannot be left empty !",
          v => v === this.userData.password || "Password do not match !"
        ]
      }
    };
  },
  watch: {
    isUserLoggedIn(value) {
      if (value) {
        window.location.href = "https://dashboard.beta.signbees.com/#/";
      }
    }
  },
  computed: {
    ...mapGetters(["loading", "isUserLoggedIn"])
  },
  methods: {
    signUp() {
      const newUser = { ...this.userData };
      delete newUser.confirmPassword;

      this.$store.dispatch("signup", { vm: this, newUser: { ...newUser } });
    }
  }
};
</script>

<style lang="scss" scoped>
#signup-page {
  background: #fff0df;
  padding: 150px 0;
  position: relative;

  .iframe-container {
    position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    z-index: -1;
    // background: #fff;
    // box-shadow: 0 0 10px;
    opacity: 0;
  }
}
</style>