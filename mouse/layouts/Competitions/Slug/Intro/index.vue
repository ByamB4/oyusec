<template>
  <v-row>
    <template v-for="_ in comps">
      <v-col
        :key="_.name"
        :cols="_.cols"
        :sm="_.sm"
        :md="_.md"
        :lg="_.lg"
        :xl="_.xl"
      >
        <component :is="_.name" />
      </v-col>
      <v-divider :key="_.name + '_'" vertical inset />
    </template>
  </v-row>
</template>

<script>
export default {
  components: {
    About: () => import("./About"),
    Statistics: () => import("./Statistics"),
    Sponsors: () => import("./Sponsors"),
  },
  data: () => ({
    comps: [
      {
        name: "About",
        cols: "12",
        sm: "6",
        md: "6",
        lg: "5",
        xl: "4",
      },
      {
        name: "Statistics",
        cols: "12",
        sm: "6",
        md: "6",
        lg: "4",
        xl: "4",
      },
      {
        name: "Sponsors",
        cols: "12",
        sm: "6",
        md: "6",
        lg: "3",
        xl: "3",
      },
    ],
  }),
};
</script>

<style></style>
