<template>
  <main id="about-page">
    <SectionBanner>
      <template slot="title">About Us</template>
      <template
        slot="sub-text"
      >Create playlists in few clicks and manage all your screens in real-time through your Signbees Dashboard using any browser on PC or Tablet.</template>
    </SectionBanner>

    <section class="section-about">
      <v-container>
        <v-layout
          row
          v-for="( item, i ) in aboutContent"
          :key="i"
          style="min-height:400px"
          class="d-flex align-center pa-10 pa-md-0 about-item"
          :style="item.imgLeft === true && 'flex-direction:row-reverse'"
        >
          <v-col cols="12" sm="6">
            <h2 style="font-size: 31px" class="mb-3">{{ item.title }}</h2>
            <p
              class="section-sub-heading"
              style="font-size:21px; letter-spacing: .3px"
            >{{ item.text }}</p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img :src="item.imgSrc" :srcset="item.imgSrcSet" contain width="550px" height="257px"></v-img>
          </v-col>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>

<script>
import SectionBanner from "~/components/Ui/SectionBanner/SectionBanner";

import worldMapImg from "~/assets/img/about/worldmap.png";
import worldMapImg2x from "~/assets/img/about/worldmap@2x.png";
import worldMapImg3x from "~/assets/img/about/worldmap@3x.png";

import buildingsImg from "~/assets/img/about/buildings.png";
import buildingsImg2x from "~/assets/img/about/buildings@2x.png";
import buildingsImg3x from "~/assets/img/about/buildings@3x.png";

import tvImg from "~/assets/img/about/tv.png";
import tvImg2x from "~/assets/img/about/tv@2x.png";
import tvImg3x from "~/assets/img/about/tv@3x.png";

export default {
  components: {
    SectionBanner
  },
  data() {
    return {
      aboutContent: [
        {
          title: "Right time for maximum impact",
          text:
            "Signbees was created to help businesses deliver dynamic content at the right place, at the right time for maximum impact.",
          imgSrc: worldMapImg,
          imgSrcSet: `${worldMapImg2x} 2x, ${worldMapImg3x} 3x`
        },
        {
          title: "Use Signbees in all type Businesses",
          text:
            "Our goal is to ensure that digital signage can be used by businesses of all sizes, micro, small, medium and large, all over the world, achieving the evolution of static and inopportune communication to a dynamic and real time.",
          imgSrc: buildingsImg,
          imgSrcSet: `${buildingsImg2x} 2x, ${buildingsImg3x} 3x`,
          imgLeft: true
        },
        {
          title: "Turn any screen into a dynamic digital signage",
          text:
            "With Signbees, you can turn any screen into  a dynamic digital signage. Our user-friendly platform helps you create, manage, and publish your content on any screen in a snap, ensuring your screens are always up to date with relevant communication. ",
          imgSrc: tvImg,
          imgSrcSet: `${tvImg2x} 2x, ${tvImg3x} 3x`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .about-item {
    flex-direction: column-reverse !important;
  }
}
</style>