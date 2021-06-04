<template>
  <v-container fluid>
    <Layout />
  </v-container>
</template>

<script>
export default {
  components: {
    Layout: () => import("@/layouts/Contribute/"),
  },
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.contribute.title,
    };
  },
};
</script>
