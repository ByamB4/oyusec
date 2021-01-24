<template>
  <v-app>
    <AppBar />

    <AppDrawer />

    <AppView />

    <AppFooter />
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import("./components/AppBar"),
    AppDrawer: () => import("./components/AppDrawer"),
    AppView: () => import("./components/AppView"),
    AppFooter: () => import("./components/AppFooter"),
  },
};
</script>
