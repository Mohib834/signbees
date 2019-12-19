<template>
  <form class="d-flex">
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" md="7" lg="8">
          <v-text-field
            style="border-radius:2px"
            background-color="white"
            dense
            solo
            flat
            placeholder="yourname@domain.com"
            height="48px"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="5" lg="4" class="text-center text-md-left mt-n4 mt-md-0">
          <v-btn
            href="#"
            nuxt
            style="border-radius: 2px; text-transform: none"
            color="primary"
            height="48px"
            width="193px"
          >
            <v-icon class="mr-2">mdi-email</v-icon>Subscribe Now!
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>
