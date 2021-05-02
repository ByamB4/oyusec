<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <WriteupThumbnail v-for="wrt in paginated" :key="wrt.id" :wrt="wrt" />
        <v-pagination
          v-model="current"
          class="mt-5"
          :length="Math.ceil(writeups.length / pageSize)"
          :total-visible="7"
        ></v-pagination>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="mt-5">
        <AcademyTips />
        <WriteupAdd />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  async asyncData(context) {
    await Promise.all([
      context.store.dispatch("writeup/updateWriteups", context)
    ])
  },
  data: () => ({
    pageSize: 10,
    current: 1
  }),
  computed: {
    ...mapGetters({
      writeups: "writeup/getWriteups"
    }),
    indexStart() {
      return (this.current - 1) * this.pageSize
    },
    indexEnd() {
      return this.indexStart + this.pageSize
    },
    paginated() {
      return this.writeups.slice(this.indexStart, this.indexEnd)
    }
  }
}
</script>
