<template>
  <v-container fill-height>
    <Layout />
  </v-container>
</template>

<script>
export default {
  components: {
    Layout: () => import("@/layouts/Auth/"),
  },
};
</script>
