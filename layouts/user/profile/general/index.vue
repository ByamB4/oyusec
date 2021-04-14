<template>
  <v-row class="mt-5">
    <v-col cols="4"><ProfileChart /></v-col>
    <v-col cols="4"><Solves /></v-col>
    <v-col cols="4"><Competition /></v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    ProfileChart: () => import("./ProfileChart"),
    Solves: () => import("./Solves"),
    Competition: () => import("./Competition")
  }
}
</script>

<style></style>
