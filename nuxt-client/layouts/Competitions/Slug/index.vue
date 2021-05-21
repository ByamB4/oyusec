<template>
  <v-row>
    <v-col cols="12">
      <v-card class="bg-transparent" elevation="0">
        <Intro />
        <Tabs />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    Intro: () => import("./Intro/"),
    Tabs: () => import("./Tabs"),
  },
};
</script>
