<template>
  <v-card class="user-bg font-play mt-5" elevation="12">
    <v-card-title class="py-3">
      <span>Үнэлэх</span>
    </v-card-title>
    <v-card-text>
      <v-rating
        class="text-center"
        background-color="primary"
        color="primary"
        empty-icon="mdi-heart-outline"
        full-icon="mdi-heart"
        hover
        length="5"
        size="32"
        :value="0"
      ></v-rating>
    </v-card-text>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
