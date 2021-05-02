<template>
  <v-row align="center">
    <v-col cols="12" sm="5" md="4" lg="3" xl="3">
      <v-avatar color="grey darken-1 shrink" size="100">
        <v-img :src="profile.photo + '?s=500'" alt="user avatar" />
      </v-avatar>
    </v-col>
    <v-col cols="12" sm="7" md="8" lg="9" xl="9">
      <h2 v-text="profile.fullname" />
      <span class="col-gray-400" v-text="'@' + profile.username" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      profile: "user/getProfile"
    })
  }
}
</script>

<style></style>
