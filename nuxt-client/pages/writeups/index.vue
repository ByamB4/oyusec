<template>
  <v-container fluid>
    <Layout />
  </v-container>
</template>

<script>
export default {
  components: {
    Layout: () => import("@/layouts/Writeups/"),
  },
  // async asyncData(context) {
  //   await Promise.all([
  //     context.store.dispatch("writeup/updateWriteups", context)
  //   ])
  // },
};
</script>
