<template>
  <v-container style>
    <v-layout row class="pa-10 pa-md-2">
      <v-col sm="6" class="inset-6">
        <div style="z-index:10; position:relative;">
          <h2 class="section-heading mb-3">Signbees content manager</h2>
          <p class="section-sub-heading mb-6" style="max-width: 510px; background:#fff">
            User friendly web-interface to manage all your screens in
            real-time with actionable insights.
          </p>
        </div>
      </v-col>
    </v-layout>
    <v-layout row>
      <v-col cols="12">
        <v-tabs
          :show-arrows="smallWidth"
          :vertical="!smallWidth"
          hide-slider
          color="#101010"
          fixed-tabs
          :height="smallWidth === false ? '360px' : '100px'"
        >
          <v-tab
            :ripple="false"
            class="d-flex justify-start pl-0"
            :style="!smallWidth && 'border-bottom: 1px solid rgba(151, 151, 151, 0.28)'"
            v-for="(item, i) in managerContents"
            :key="i"
            @click="activeTab = i"
          >
            <li class="tabs__tab">
              <v-icon
                style="transition:all .3s; opacity:0"
                color="primary"
                class="ml-n2"
                size="30"
                :style="activeTab === i && 'opacity:1'"
              >mdi-chevron-right</v-icon>
              {{ item.tab }}
            </li>
          </v-tab>

          <v-tab-item class="offset-0 offset-md-3" v-for="(item, i) in managerContents" :key="i">
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
      activeTab: 0,
      windowWidth: 0,
      smallWidth: false,
      managerContents: [
        { tab: "Status and Location", tabItem: contentImg1 },
        { tab: "Multi type content support", tabItem: contentImg1 },
        { tab: "Create and schedule playlists", tabItem: contentImg1 },
        { tab: "Grouping Screens", tabItem: contentImg1 },
        { tab: "Create and schedule playlists", tabItem: contentImg1 }
      ]
    };
  },

  mounted() {
    this.windowWidth = window.outerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.outerWidth;
    });
  },

  watch: {
    windowWidth(data) {
      data <= 1000 ? (this.smallWidth = true) : (this.smallWidth = false);
    }
  }
};
</script>

<style lang="scss">
.tabs__tab {
  list-style: none;
}

.v-tabs-items.v-window {
  margin-top: -100px;
}

@media (max-width: 1000px) {
  .v-tabs-items.v-window {
    margin-top: 50px;
  }

  .tabs__tab {
  }
}
</style>