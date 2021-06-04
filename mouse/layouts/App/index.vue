<template>
  <v-app>
    <AppBar />
    <AppDrawer />
    <AppView />
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import("./AppBar"),
    AppDrawer: () => import("./AppDrawer"),
    AppView: () => import("./AppView"),
    // AppFooter: () => import("./AppFooter"),
  },
};
</script>

<style></style>
