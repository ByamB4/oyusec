<template>
  <v-row align="center" no-gutters justify="center">
    <v-col cols="3" align="center">
      <v-img
        max-height="80"
        max-width="80"
        src="/sword.png"
        alt="user avatar"
      />
    </v-col>
    <v-col cols="3" align="center">
      <h2>#57</h2>
      <span class="f-17 col-gray-300">Ranking</span>
    </v-col>
    <v-col cols="3" align="center">
      <h2>15107</h2>
      <span class="f-17 col-gray-300">Score</span>
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
