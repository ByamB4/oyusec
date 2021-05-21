<template>
  <v-container fluid>
    <Layout />
  </v-container>
</template>

<script>
export default {
  components: {
    Layout: () => import("@/layouts/Academy/Index/"),
  },
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.academy.title,
    };
  },
};
</script>
