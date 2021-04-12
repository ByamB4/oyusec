<template>
  <v-card elevation="12" class="user-bg">
    <v-card-title class="justify-center">
      <v-avatar color="grey darken-1 shrink" size="78">
        <v-img :src="profile.photo + '?s=500'" alt="user avatar" />
      </v-avatar>
    </v-card-title>
    <v-card-text class="text-center f-17">
      <h2 class="f-semibold white--text" v-text="profile.username" />
    </v-card-text>
  </v-card>
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
