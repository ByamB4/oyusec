<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <user-detail />
        <user-action :edit="edit" @toggleEdit="edit = !edit" />
        <user-edit v-if="edit" class="mt-5" />
      </v-col>

      <v-col cols="6">
        <!-- <user-feed v-else /> -->
        <UserSolves />
      </v-col>

      <v-col cols="3">
        <!-- <user-active-links v-else /> -->
      </v-col>
    </v-row>

    <v-row justify="center" class="font-exo mt-5">
      <!-- <v-col cols="12">
        <UserProfile />
      </v-col> -->
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6"> </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
        <UserCompetition />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    edit: false
  }),
  head() {
    return {
      title: this.$route.params.slug
    }
  },
  mounted() {
    this.$store.dispatch("user/getProfile", { slug: this.$route.params.slug })
  }
}
</script>
