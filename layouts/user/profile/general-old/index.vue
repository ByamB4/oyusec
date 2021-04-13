<template>
  <v-row class="mt-5">
    <v-col cols="6"><Edit /></v-col>
    <v-col cols="6"><Hint /></v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    Edit: () => import("./Edit"),
    Hint: () => import("./Hint"),
  },
}
</script>

<style></style>
