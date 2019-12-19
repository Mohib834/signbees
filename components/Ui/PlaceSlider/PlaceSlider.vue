<template>
  <v-container class="place-slider">
    <v-row>
      <div class="place-slider__path d-none d-lg-block">
        <v-img :src="pathImg" max-width="1100px" />
        <v-img class="place-slider__path-bee" :src="beeImg" contain width="31px" height="39px" />
      </div>
      <v-col cols="12" class="mb-4">
        <h2 class="section-heading">Where</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="carousel-container">
        <v-carousel
          height="375px"
          class="elevation-2 carousel"
          style="border-radius:4px"
          :show-arrows="false"
          hide-delimiter-background
          hide-delimiter
        >
          <v-carousel-item class="pl-12" v-for="(place, i) in places" :key="i">
            <v-row>
              <v-col cols="12" sm="6" class="pt-5 pt-sm-12" style="padding-top:70px">
                <h2 class="title mb-6">{{ place.title }}</h2>
                <p
                  class="mb-8"
                  style="font-size:17px; color:#575757; max-width:472px;"
                >{{ place.text }}</p>
                <v-btn
                  href="/signup"
                  nuxt
                  style="border-radius: 2px; text-transform: none"
                  color="primary"
                  height="48px"
                  width="236px"
                >
                  Connect to signbees now
                  <v-icon size="30px" class="mr-n3">mdi-menu-right</v-icon>
                </v-btn>
              </v-col>
              <v-col sm="6" class="d-none d-md-block pa-0">
                <v-img
                  class="carousel-img"
                  :src="place.imgSrc"
                  :srcset="place.imgSrcSet"
                  width="617px"
                  height="383px"
                ></v-img>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pathImg from "~/assets/img/path.png";
import beeImg from "~/assets/img/bee.png";

import pubsImg from "~/assets/img/pubs.png";
import pubsImg2x from "~/assets/img/pubs@2x.png";
import pubsImg3x from "~/assets/img/pubs@3x.png";

import hotelImg from "~/assets/img/hotel.png";
import hotelImg2x from "~/assets/img/hotel@2x.png";
import hotelImg3x from "~/assets/img/hotel@3x.png";

import gymImg from "~/assets/img/gym.png";
import gymImg2x from "~/assets/img/gym@2x.png";
import gymImg3x from "~/assets/img/gym@3x.png";

import officeImg from "~/assets/img/office.png";
import officeImg2x from "~/assets/img/office@2x.png";
import officeImg3x from "~/assets/img/office@3x.png";

import marketImg from "~/assets/img/market.png";
import marketImg2x from "~/assets/img/market@2x.png";
import marketImg3x from "~/assets/img/market@3x.png";

export default {
  data() {
    return {
      pathImg,
      beeImg,
      places: [
        {
          title: "Restaurants / Pubs / Lounges",
          text:
            "Restaurant digital signage is quickly becoming a standard feature in QSRs, fast casual restaurants, bars, and fine dining. Digital signs in the restaurant improve customer communications and create a livelier atmosphere.",
          imgSrc: pubsImg,
          imgSrcSet: `${pubsImg2x} 2x, ${pubsImg3x} 3x`
        },
        {
          title: "Hospitality",
          text:
            "Add visual appeal and modernize hotel lobbies, restaurants and hallways, and contribute to an upscale ambiance.",
          imgSrc: hotelImg,
          imgSrcSet: `${hotelImg2x} 2x, ${hotelImg3x} 3x`
        },
        {
          title: "Gyms, Rec & Fitness",
          text:
            "Digital signs in a gym are a great visual vehicle for gyms and fitness clubs to present relevant content over the noise of a gym full of physically active people and loud equipment.",
          imgSrc: gymImg,
          imgSrcSet: `${gymImg2x} 2x, ${gymImg3x} 3x`
        },
        {
          title: "Corporate",
          text:
            "The faster and more efficiently employees can get important information, the easier it is for them to do their job. Just as email has replaced the hand-printed memo,  digital signage is replacing office whiteboards to open up communication pathways in the workplace.",
          imgSrc: officeImg,
          imgSrcSet: `${officeImg2x} 2x, ${officeImg3x} 3x`
        },
        {
          title: "Retail",
          text:
            "Digital signage mirrors the online experience — bring aspects of online shopping to the store and give your customers a complete shopping experience.",
          imgSrc: marketImg,
          imgSrcSet: `${marketImg2x} 2x, ${marketImg3x} 3x`
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.place-slider {
  min-height: 628px;
  position: relative;

  &__path {
    position: absolute;
    top: -88px;
    left: 123px;
    z-index: 1;

    &-bee {
      position: absolute;
      right: 1.5px;
    }
  }
}

.carousel-container {
  position: relative;
  z-index: 10;
}

.carousel {
  background: #fff;
}

.v-carousel {
  position: static;
  &__controls {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    bottom: -40px;
    .v-item-group {
      margin-left: 20px;
    }

    .v-icon {
      display: none;
    }
  }

  &__controls__item {
    background: #eee !important;
    height: 5px !important;
    width: 22px !important;
    border-radius: 3px !important;

    &.v-btn--active {
      background: $color-primary !important;
    }

    &:hover {
      background: #eee;
    }
  }
}
</style>