<template>
  <v-app>
    <AppBar />

    <AppDrawer />

    <AppView />

    <AppFooter />
  </v-app>
</template>

<script>
import AppBar from '~/layouts/AppBar'
import AppDrawer from '~/layouts/AppDrawer'
import AppView from '~/layouts/AppView'
import AppFooter from '~/layouts/AppFooter'

export default {
  components: {
    AppBar,
    AppDrawer,
    AppView,
    AppFooter,
  },
}
</script>
