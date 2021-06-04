<template>
  <v-container fluid>
    <Layout />
  </v-container>
</template>

<script>
export default {
  components: {
    Layout: () => import("@/layouts/Competitions/Slug/"),
  },
  async asyncData(context) {
    const { slug } = context.params;
    await Promise.all([
      context.store.dispatch("competition/updateCompetition", slug),
    ]);
  },
};
</script>
