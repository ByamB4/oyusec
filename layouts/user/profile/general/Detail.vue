<template>
  <v-row>
    <v-col cols="12" align="center">
      <v-avatar color="grey darken-1 shrink" size="120">
        <v-img :src="profile.photo + '?s=500'" alt="user avatar" />
      </v-avatar>
    </v-col>
    <v-col cols="12" align="center">
      <h2 v-text="profile.fullname" />
      <span class="col-gray-300" v-text="'@' + profile.username" />
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
