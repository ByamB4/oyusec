<template>
  <v-main class="bg-dark mt-5">
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
