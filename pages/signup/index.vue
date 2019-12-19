<template>
  <main id="signup-page">
    <v-card class="iframe-container">
      <iframe ref="iframe" src="https://sso.beta.signbees.com" width="100%" height="100%"></iframe>
    </v-card>
    <v-container>
      <v-row>
        <v-col>
          <v-card elevation="0" outlined class="pa-10">
            <v-row>
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
              <v-col col="12" md="6" class="d-flex align-center mt-4">
                <v-form style="width:400px;" class="mx-auto" ref="form" @submit.prevent>
                  <div v-if="!signingUp && !isUserEmailExist.exist">
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
                      :loading="loading"
                      @click="checkUserEmailExistence"
                    >Get Started</v-btn>

                    <v-row>
                      <v-col class>
                        <p class="subtitle-2">
                          By signing up, you agree to the
                          <nuxt-link
                            to="/term-of-service"
                            class="mr-1 signbees-link"
                          >Term of Service</nuxt-link>by Signbees.
                        </p>
                        <p class="subtitle-2">
                          Already have an account ?
                          <nuxt-link to="/signin" class="signbees-link">Login</nuxt-link>
                        </p>
                      </v-col>
                    </v-row>
                  </div>
                  <template v-if="signingUp && !isUserEmailExist.exist">
                    <v-row class="flex-column text-center">
                      <h2 class="section-sub-heading">Let's get you started</h2>
                      <p class="caption">Set up a password for your account</p>
                    </v-row>
                    <v-row class="mb-n6">
                      <v-col class="px-0 pr-1">
                        <v-text-field
                          :rules="rules.name"
                          v-model="userData.firstName"
                          label="First Name"
                          :disabled="loading == true"
                          outlined
                          dense
                          type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-0">
                        <v-text-field
                          :disabled="loading == true"
                          :rules="rules.name"
                          v-model="userData.lastName"
                          label="Last Name"
                          outlined
                          dense
                          type="text"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mb-n6">
                      <v-col class="px-0">
                        <v-text-field
                          disabled
                          :rules="rules.email"
                          v-model="userData.email"
                          label="Email"
                          outlined
                          dense
                          type="email"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mb-n6">
                      <v-col class="px-0">
                        <v-text-field
                          :disabled="loading == true"
                          :rules="rules.password"
                          label="Password"
                          v-model="userData.password"
                          outlined
                          dense
                          type="password"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mb-n6">
                      <v-col class="px-0">
                        <v-text-field
                          :disabled="loading == true"
                          :rules="rules.confirmPassword"
                          label="Confirm Password"
                          v-model="userData.confirmPassword"
                          outlined
                          dense
                          type="password"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class>
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
                    </v-row>
                  </template>
                  <template v-if="isUserEmailExist.exist">
                    <v-row>
                      <v-col>
                        <h2 class="title">Welcome back</h2>
                        <h1 class="display-1">{{isUserEmailExist.user}}</h1>
                        <p class="mb-0 mt-4">We have found you on our system!</p>
                        <p>
                          Use your email to
                          <a
                            href="https://dashboard.beta.signbees.com"
                            class="signbees-link"
                          >Login Now!</a>
                        </p>
                        <p class="subtitle-1">
                          <strong>Forgot password?</strong>
                          <br />
                          <a
                            href="https://dashboard.signbees.com/#/login/forgot-password"
                            class="signbees-link"
                          >Click here</a> to reset your password now!
                        </p>
                      </v-col>
                    </v-row>
                  </template>
                </v-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { openDB } from "idb";
import { mapGetters } from "vuex";

export default {
  async beforeMount() {
    const storeName = "firebaseLocalStorage";
    const db = await openDB("firebaseLocalStorageDb", 1);
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const data = await store.getAll();
    tx.done;

    if (data[0]) {
      window.location.replace("https://dashboard.beta.signbees.com/#/");
    }
  },
  mounted() {
    this.$store.commit("changeUserEmailExistenceStatus", false);
    this.$store.commit("changeSigningUpStatus", false);
  },
  data() {
    return {
      items: [
        "Initial set up process included",
        "One Free Screen",
        "Access to Premium Apps",
        "24*5 Dedicated Support",
        "No Card Required"
      ],
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        name: [v => v.length === 0 && "Field cannot be left empty !"],
        email: [
          v => v.length === 0 && "Field cannot be left empty !",
          v =>
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "Invalid Email address"
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
    ...mapGetters([
      "loading",
      "isUserLoggedIn",
      "isUserEmailExist",
      "signingUp"
    ])
  },
  methods: {
    signUp() {
      const newUser = { ...this.userData };
      delete newUser.confirmPassword;

      this.$store.dispatch("signup", { vm: this, newUser: { ...newUser } });
    },
    checkUserEmailExistence() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("checkUserEmail", { email: this.userData.email });
      }
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