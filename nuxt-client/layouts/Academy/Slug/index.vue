<template>
  <v-row>
    <v-col cols="12" sm="7" md="7" lg="8" xl="8">
      <Detail />
    </v-col>
    <v-col cols="12" sm="5" md="5" lg="4" xl="4">
      <Section />
      <Rate />
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    Rate: () => import("./Gadgets/Rate"),
    Detail: () => import("./Section/Detail"),
    Section: () => import("./Section/Section"),
  },
};
</script>

<style></style>
