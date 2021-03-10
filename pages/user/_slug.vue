<template>
  <v-container>
    <v-row class="font-cabin">
      <v-col cols="12">
        <profile />
      </v-col>
      <v-col cols="12" class="mt-5">
        <solvedchalls />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    solvedchalls: () => import("~/components/user/SolvedChalls"),
    profile: () => import("~/components/user/Profile"),
  },
  head() {
    return {
      title: this.$route.params.slug,
    }
  },
}
</script>
