<template>
  <v-row align="center" no-gutters justify="center">
    <v-col cols="3" align="center">
      <h2>#57</h2>
      <span class="f-17 col-gray-400">Ranking</span>
    </v-col>
    <v-col cols="3" align="center">
      <h2>15107</h2>
      <span class="f-17 col-gray-400">Score</span>
    </v-col>
    <v-col cols="3" align="center">
      <h2>5123</h2>
      <span class="f-17 col-gray-400">Days</span>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },
}
</script>

<style></style>
