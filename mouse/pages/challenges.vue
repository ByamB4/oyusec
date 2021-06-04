<template>
  <v-container fluid class="challenges">
    <Layout />
  </v-container>
</template>
<script>
export default {
  components: {
    Layout: () => import("@/layouts/Challenges/"),
  },
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.challenges.title,
    };
  },
  mounted() {
    this.$store.dispatch("challenge/updateChallenges");
    this.$store.dispatch("challenge/updateChallengesSolves");
  },
};
</script>
