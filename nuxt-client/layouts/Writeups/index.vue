<template>
  <v-row>
    <v-col cols="12" sm="12" md="8" lg="8" xl="8">
      <Thumbnail v-for="wrt in paginated" :key="wrt.id" :wrt="wrt" />
      <v-pagination
        v-model="current"
        class="mt-5"
        :length="Math.ceil(writeups.length / pageSize)"
        :total-visible="7"
      ></v-pagination>
    </v-col>
    <v-col cols="12" sm="12" md="4" lg="4" xl="4">
      <Add />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    Thumbnail: () => import("./Thumbnail"),
    Add: () => import("./Add"),
  },
  data: () => ({
    pageSize: 10,
    current: 1,
  }),
  computed: {
    ...mapGetters({
      writeups: "writeup/getWriteups",
    }),
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.writeups.slice(this.indexStart, this.indexEnd);
    },
  },
  mounted() {
    this.$store.dispatch("writeup/updateWriteups");
  },
};
</script>

<style></style>
