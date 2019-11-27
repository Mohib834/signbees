<template>
  <v-container class="pt-0">
    <v-layout row>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-img
          :src="require('~/assets/img/features/bee-line.png')"
          :srcset="`${require('~/assets/img/features/bee-line@2x.png')} 2x, ${require('~/assets/img/features/bee-line@3x.png')} 3x`"
          contain
          width="864px"
          height="133px"
        ></v-img>
      </v-col>
    </v-layout>
    <v-layout class="pa-10 pa-md-2">
      <v-col cols="12" sm="6" class="pa-0 offset-sm-3">
        <h2 class="title font-italic text-center" style="color:#515151; font-family: Georgia;">
          <slot />
        </h2>
      </v-col>
    </v-layout>
  </v-container>
</template>