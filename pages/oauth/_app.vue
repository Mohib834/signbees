<template>
  <main class="mt-0 d-flex align-center justify-center" style="height:100vh">
    <section style="width:100%">
      <v-container>
        <v-row>
          <v-col>
            <v-img
              class="mx-auto mt-5"
              width="300px"
              :src="require('@/assets/img/logo@3x.png')"
              contain
            />
            <v-spacer style="height:50px" />
            <v-sheet class="d-flex flex-column align-center">
              <h3 v-if="success" class="headline mb-6 font-weight-bold">
                Your authorization was successful for
                <span class="text-capitalize">{{app}}</span>.
              </h3>
              <h3 class="headline mb-6 font-weight-bold" v-else>
                Authorization failed for
                <span class="text-capitalize">{{app}}</span>
                . {{message}}.
              </h3>
              <v-btn @click="close" color="primary" depressed>Go to Home</v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    success() {
      if (this.$route.query.code) {
        return this.$route.query.code.includes("success");
      }
    },
    app() {
      if (this.$route.params.app.includes("-")) {
        return this.$route.params.app.replace("-", " ");
      }
      return this.$route.params.app;
    },
    message() {
      return this.$route.query.message;
    }
  },
  mounted() {
    this.$store.commit("changeHeaderFooterHideStatus", true);
  },
  methods: {
    close() {
      const parentUrl = window.opener.document.location.href;
      window.postMessage("close button clicked", parentUrl);
    }
  }
};
</script>