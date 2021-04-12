<template>
  <v-card class="user-bg" elevation="12">
    <v-card-title class="justify-center" primary-title>
      <span class="f-20 f-semibold">Сошиал хаяг</span>
    </v-card-title>
    <v-card-text>
      <v-btn
        v-for="social in profile.socials"
        :key="social.type"
        :href="social.link"
        target="_blank"
        icon
        class="ml-3"
      >
        <v-icon size="32" v-text="social.icon" />
      </v-btn>
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
