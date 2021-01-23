<template>
  <v-main class="bg-dark">
    <AppLoading />
    <router-view />
  </v-main>
</template>

<script>
export default {
  name: "AppView",

  components: {
    AppLoading: () => import("./AppLoading"),
  },
};
</script>
