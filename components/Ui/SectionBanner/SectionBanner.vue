<template>
  <section id="section-banner">
    <v-container :fluid="full">
      <v-layout row align-center class="pa-10 pa-md-0">
        <v-col :offset="full ? 1 : null" :class="full && 'pa-0'">
          <h1 class="display-1 mb-4 line-above">
            <slot name="title" />
          </h1>
          <p class="section-sub-heading white--text mb-0" style="max-width:567px">
            <slot name="sub-text" />
          </p>
        </v-col>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    full: {
      type: Boolean
    }
  }
};
</script>

<style scoped>
#section-banner {
  background: #072332;
  height: 305px;
  display: flex;
  align-items: center;
  color: white;
}
</style>