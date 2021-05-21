<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
      <TodayTopPlayer />
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
      <ComingCompetition />
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    TodayTopPlayer: () => import("./TodayTopPlayer"),
    ComingCompetition: () => import("./ComingCompetition"),
  },
};
</script>

<style></style>
