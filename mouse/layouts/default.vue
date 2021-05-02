<template>
  <v-app>
    <AppDrawer />
    <AppBar />
    <AppView />
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import("~/layouts/AppBar"),
    AppDrawer: () => import("~/layouts/AppDrawer"),
    AppView: () => import("~/layouts/AppView"),
    AppFooter: () => import("~/layouts/AppFooter")
  }
}
</script>
