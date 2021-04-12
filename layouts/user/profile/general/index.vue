<template>
  <v-row class="mt-5">
    <v-col cols="3"><Detail /> </v-col>
    <v-col cols="6"><Edit /></v-col>
    <v-col cols="3"><Hint /></v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    Detail: () => import("./Detail"),
    Edit: () => import("./Edit"),
    Hint: () => import("./Hint"),
  },
}
</script>

<style></style>
