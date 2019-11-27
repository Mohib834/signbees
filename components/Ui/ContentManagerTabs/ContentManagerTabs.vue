<template>
  <v-container class="d-flex flex-column justify-center" style="height:711px">
    <v-layout row>
      <v-col sm="6" class="inset-6">
        <div>
          <h2 class="section-heading mb-3">Signbees content manager</h2>
          <p class="section-sub-heading mb-6" style="width: 510px">
            User friendly web-interface to manage all your screens in
            real-time with actionable insights.
          </p>
        </div>
      </v-col>
    </v-layout>
    <v-layout row style="flex:0">
      <v-col cols="12">
        <v-tabs vertical show-arrows>
          <v-tab v-for="(item, i) in managerContents" :key="i">{{ item.tab }}</v-tab>
          <v-tab-item class="offset-3" v-for="(item, i) in managerContents" :key="i">
            <v-img :src="item.tabItem" contain max-width="683px" max-height="559px"></v-img>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import contentImg1 from "~/assets/img/content-1.png";

export default {
  data() {
    return {
      managerContents: [
        { tab: "Status and Location", tabItem: contentImg1 },
        { tab: "Multi type content support", tabItem: contentImg1 },
        { tab: "Create and schedule playlists", tabItem: contentImg1 },
        { tab: "Grouping Screens", tabItem: contentImg1 }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>