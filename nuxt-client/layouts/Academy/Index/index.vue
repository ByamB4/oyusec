<template>
  <v-row>
    <v-col cols="12" sm="12" md="8" lg="9" xl="9">
      <v-row>
        <v-col
          v-for="ac in academies.filter(({ category }) =>
            cat.includes(category)
          )"
          :key="ac.id"
          cols="12"
          sm="6"
          md="6"
          lg="3"
          xl="3"
        >
          <Tutorial :tutorial="ac" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" md="4" lg="3" xl="3">
      <Tips />
      <FilterAC @filter="upFilter" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    Tutorial: () => import("./Tutorial"),
    FilterAC: () => import("./FilterAC"),
    Tips: () => import("./Tips"),
  },
  data: () => ({
    cat: [],
  }),
  computed: {
    ...mapGetters({
      academies: "academy/getAcademies",
    }),
  },
  mounted() {
    this.$store.dispatch("academy/updateAcademies");
  },
  methods: {
    upFilter(_) {
      this.cat = _;
    },
  },
};
</script>

<style></style>
