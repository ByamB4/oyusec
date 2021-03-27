<template>
  <v-container fluid class="mt-5">
    <v-row class="font-monts">
      <!-- <v-col cols="12">
        <UserProfile />
      </v-col> -->
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="mt-5">
        <UserSolves />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="mt-5">
        <UserCompetition />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$route.params.slug,
    }
  },
}
</script>
