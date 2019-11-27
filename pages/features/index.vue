<template>
  <main id="feature-page">
    <SectionBanner>
      <template slot="title">Features</template>
      <template
        slot="sub-text"
      >Create playlists in few clicks and manage all your screens in real-time through your Signbees Dashboard using any browser on PC or Tablet.</template>
    </SectionBanner>

    <section id="features">
      <v-container>
        <v-layout row class="pa-10 pa-md-2 pb-md-0 pt-md-6">
          <v-col
            class="pb-0"
            v-for="(feature, i) in features"
            :key="i"
            cols="12"
            sm="6"
            md="6"
            lg="3"
          >
            <v-card min-width="273px" height="206px" class="pa-3">
              <v-card-title>
                <v-img
                  :src="feature.img"
                  :srcset="feature.imgSrcSet"
                  contain
                  width="67px"
                  height="67px"
                ></v-img>
              </v-card-title>
              <v-card-text class="section-sub-heading text-center pt-1 pa-0 px-4">{{ feature.text }}</v-card-text>
            </v-card>
          </v-col>
        </v-layout>

        <BeeComponent>Easy-to- use software and highly responsive controls to help you achieve your communication goals.</BeeComponent>
      </v-container>
    </section>
    <section id="feature-detail">
      <v-container>
        <v-layout
          row
          v-for="(item, i) in featureDetails"
          style="min-height:343px"
          align-center
          :key="i"
          :style="`flex-direction: ${item.imgRight ? 'row-reverse' : 'row'}`"
          class="pa-10 pa-md-2"
        >
          <v-col cols="12" sm="6">
            <h2 class="section-heading mb-2" style="max-width:402px">{{item.title}}</h2>
            <ul style="list-style:none" class="pl-0">
              <li
                v-for="(listItem, idx) in item.listItems"
                :key="idx"
                style="text-indent:-22px; margin-left:22px"
                class="mb-1 section-sub-heading"
              >
                <span class="oval mr-2"></span>
                {{listItem}}
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img contain :src="item.img" :srcset="item.imgSrcSet" width="372px" height="254px"></v-img>
          </v-col>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>

<script>
import SectionBanner from "~/components/Ui/SectionBanner/SectionBanner";
import BeeComponent from "~/components/Ui/BeeComponent/BeeComponent";

import featureImg1 from "~/assets/img/features/feature-1.png";
import featureImg1_2x from "~/assets/img/features/feature-1@2x.png";
import featureImg1_3x from "~/assets/img/features/feature-1@3x.png";

import featureImg2 from "~/assets/img/features/feature-2.png";
import featureImg2_2x from "~/assets/img/features/feature-2@2x.png";
import featureImg2_3x from "~/assets/img/features/feature-2@3x.png";

import featureImg3 from "~/assets/img/features/feature-3.png";
import featureImg3_2x from "~/assets/img/features/feature-3@2x.png";
import featureImg3_3x from "~/assets/img/features/feature-3@3x.png";

import cloudImg from "~/assets/img/features/cloud.png";
import cloudImg2x from "~/assets/img/features/cloud@2x.png";
import cloudImg3x from "~/assets/img/features/cloud@3x.png";

import clockImg from "~/assets/img/features/clock.png";
import clockImg2x from "~/assets/img/features/clock@2x.png";
import clockImg3x from "~/assets/img/features/clock@3x.png";

import mouseImg from "~/assets/img/features/mouse.png";
import mouseImg2x from "~/assets/img/features/mouse@2x.png";
import mouseImg3x from "~/assets/img/features/mouse@3x.png";

// import pencilImg from "~/assets/img/features/pencil.png";

export default {
  components: {
    SectionBanner,
    BeeComponent
  },
  data() {
    return {
      features: [
        {
          img: cloudImg,
          imgSrcSet: `${cloudImg2x} 2x, ${cloudImg3x} 3x`,
          text: "Totally in the cloud without the need to install"
        },
        {
          img: clockImg,
          imgSrcSet: `${clockImg2x} 2x, ${clockImg3x} 3x`,

          text: "Set-up in less than 1 minute"
        },
        {
          img: mouseImg,
          imgSrcSet: `${mouseImg2x} 2x, ${mouseImg3x} 3x`,
          text: "Content publication and update in just 2 clicks"
        },
        {
          img: mouseImg,
          imgSrcSet: `${mouseImg2x} 2x, ${mouseImg3x} 3x`,
          text: "Your own corporate channel without the off any third party"
        }
      ],
      featureDetails: [
        {
          title: "Create content and Manage",
          listItems: [
            "Create & edit Content",
            "Embed your favorite file types",
            "Quickly access files in Content Library",
            "Upload directly through your browser",
            "Override content in real time"
          ],
          img: featureImg1,
          imgSrcSet: `${featureImg1_2x} 2x, ${featureImg1_3x} 3x`,
          imgRight: false
        },
        {
          title: "Distribute and update content on the Fly",
          listItems: [
            "Schedule distribution ahead of time",
            "Preview content, Define play duration, and Sequence your creatives.",
            "Distribute content in real-time to specific displays at different locations",
            "Run your content online or offline",
            "Publish with the click of a button"
          ],
          img: featureImg2,
          imgSrcSet: `${featureImg2_2x} 2x, ${featureImg2_3x} 3x`,
          imgRight: true
        },
        {
          title: "Manage Devices at scales",
          listItems: [
            "Group Screens by Location, campaign, and priority",
            "Preview your content",
            "Monitor proof-of-play",
            "Get status updates in real time",
            "Maintain enterprise-level control",
            "Secure your data",
            "Create fallback actions"
          ],
          img: featureImg3,
          imgSrcSet: `${featureImg3_2x} 2x, ${featureImg3_3x} 3x`,
          imgRight: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#features {
  min-height: 360px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to bottom, #fff8f3, #ffffff);
}
</style>