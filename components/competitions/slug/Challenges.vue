<template>
  <div class="font-exo">
    <v-row v-if="competition.status === 'Удахгүй'">
      <v-col cols="12" align="center">
        <counter
          :year="competition.start_date.getFullYear()"
          :month="competition.start_date.getMonth()"
          :date="competition.start_date.getDate()"
          :hour="competition.start_date.getHours()"
          :minute="competition.start_date.getMinutes()"
          :second="competition.start_date.getSeconds()"
          :millisecond="0"
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-expansion-panels popout tile>
        <challenge
          v-for="challenge in challenges"
          :key="challenge.id"
          :challenge="challenge"
        />
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {
    challenge: () => import("~/components/Challenge"),
    counter: () => import("~/components/Counter"),
  },
  data: () => ({
    challenges: [],
    competition: {},
  }),
  created() {
    this.getCompetition()
  },
  methods: {
    async getCompetition() {
      const { data } = await this.$axios.get(
        `api/competition/${this.$route.params.slug}/`
      )
      if (data.success) {
        this.competition = data.data
        this.competition.start_date = new Date(this.competition.start_date)
        this.challenges = data.data.challenges
      }
    },
  },
}
</script>

<style></style>
