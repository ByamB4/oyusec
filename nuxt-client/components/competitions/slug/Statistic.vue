<template>
  <v-container fluid>
    <v-row class="font-exo">
      <v-col cols="6">
        <v-card
          elevation="0"
          class="_31 py-0 my-0 rounded-0 bg-transparent"
          dark
        >
          <v-card-title class="text-h5 font-press">1551</v-card-title>

          <v-card-subtitle>Flags submitted</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ]
  })
}
// import { mapGetters } from "vuex"

// export default {
//   computed: {
//     ...mapGetters({
//       competition: "competition/getCompetition",
//     }),
//     start_date() {
//       const date = new Date(this.competition.start_date)
//       return `${date.getFullYear()}-${
//         date.getMonth() + 1
//       }-${date.getDate()} ${this.formatNum(date.getHours())}:${this.formatNum(
//         date.getMinutes()
//       )}`
//     },
//     end_date() {
//       const date = new Date(this.competition.end_date)
//       return `${date.getFullYear()}-${
//         date.getMonth() + 1
//       }-${date.getDate()} ${this.formatNum(date.getHours())}:${this.formatNum(
//         date.getMinutes()
//       )}`
//     },
//     description() {
//       return String(this.competition.description)
//     },
//     rule() {
//       return String(this.competition.rule)
//     },
//     prize() {
//       return String(this.competition.prize)
//     },
//   },
//   methods: {
//     formatNum: (num) => (num < 10 ? "0" + num : num),
//   },
// }
</script>
<style lang="sass">
._31
  border-left: 5px solid $light-tab-light !important
</style>
