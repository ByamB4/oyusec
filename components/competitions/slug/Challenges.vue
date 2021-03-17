<template>
  <div>
    <counter
      :year="2021"
      :month="4"
      :date="22"
      :hour="19"
      :minute="52"
      :second="20"
      :millisecond="31"
    />
    <v-expansion-panels popout tile>
      <challenge
        v-for="challenge in challenges"
        :key="challenge.id"
        :challenge="challenge"
      />
    </v-expansion-panels>
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
        this.challenges = data.data.challenges
      }
    },
  },
}
</script>

<style></style>
