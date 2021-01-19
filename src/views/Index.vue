<template>
  <v-app style="background-color: #0c1221">
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
  data: () => ({
    expandOnHover: false,
  }),
};
</script>
<style lang="sass">
::-webkit-scrollbar
  width: 0px
</style>
