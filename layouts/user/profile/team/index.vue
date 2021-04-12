<template>
  <v-row>
    <v-col cols="6"><about /></v-col>
    <v-col cols="6"><detail /> </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    about: () => import("./About"),
    detail: () => import("./Detail"),
  },
}
</script>

<style></style>
