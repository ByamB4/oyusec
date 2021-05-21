<template>
  <v-row>
    <v-col
      v-for="social in profile.socials"
      :key="social.type"
      cols="12"
      sm="12"
      md="6"
      lg="6"
      xl="6"
      class="col-gray-400 py-2"
    >
      <div class="text-truncate">
        <v-icon color="grey lighten-2" size="24" v-text="social.icon" />
        <span v-text="social.handle" />
      </div>
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
