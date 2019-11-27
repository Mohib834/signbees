<template>
  <v-container class="place-slider">
    <v-layout>
      <!-- <div class="place-slider__path">
        <v-img :src="pathImg" max-width="1100px" />
        <v-img class="place-slider__path-bee" :src="beeImg" contain width="31px" height="39px" />
      </div>-->
      <v-col cols="12" class="mb-4">
        <h2 class="section-heading">Where</h2>
      </v-col>
    </v-layout>
    <v-layout>
      <v-col cols="12" class="carousel-container">
        <v-carousel
          height="375px"
          class="elevation-2 carousel"
          style="border-radius:4px"
          :show-arrows="false"
          hide-delimiter-background
          hide-delimiter
        >
          <v-carousel-item class="pa-12 pr-0" v-for="(n, i) in 6" :key="i">
            <v-row>
              <v-col cols="12" sm="6">
                <h2 class="title mb-6">Restaurants / Pubs / Lounges</h2>
                <p
                  class="mb-8"
                  style="font-size:17px; color:#575757; width:472px;"
                >Restaurant digital signage is quickly becoming a standard feature in QSRs, fast casual restaurants, bars, and fine dining. Digital signs in the restaurant improve customer communications and create a livelier atmosphere.</p>
                <v-btn
                  href="#"
                  nuxt
                  style="border-radius: 2px; text-transform: none"
                  color="primary"
                  height="48px"
                  width="220px"
                >
                  Get Your Free Trial
                  <v-icon size="30px" class="mr-n3">mdi-menu-right</v-icon>
                </v-btn>
              </v-col>
              <v-col sm="6" class="d-none d-md-block">
                <v-img class="carousel-img" :src="carouselImg" width="554px" height="317px" contain></v-img>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import carouselImg from "~/assets/img/carousel-img-1.png";
import pathImg from "~/assets/img/path.png";
import beeImg from "~/assets/img/bee.png";

export default {
  data() {
    return {
      carouselImg,
      pathImg,
      beeImg
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