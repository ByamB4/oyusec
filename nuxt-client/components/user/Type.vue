<template>
  <v-row align="center" no-gutters justify="center">
    <v-col cols="3" align="center">
      <h2 v-text="profile.added_challenge" />
      <span class="f-17 col-gray-400" v-text="$t('challenge')" />
    </v-col>
    <v-col cols="3" align="center">
      <h2 v-text="profile.score" />
      <span class="f-17 col-gray-400" v-text="$t('score')" />
    </v-col>
    <v-col cols="3" align="center">
      <h2 v-text="profile.days" />
      <span class="f-17 col-gray-400" v-text="$t('days')" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },
};
</script>

<style></style>
