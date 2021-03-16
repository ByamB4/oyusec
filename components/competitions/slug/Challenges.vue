<template>
  <v-expansion-panels popout tile>
    <challenge
      v-for="challenge in challenges"
      :key="challenge.id"
      :challenge="challenge"
    />
  </v-expansion-panels>
</template>

<script>
export default {
  components: { challenge: () => import("~/components/Challenge") },
  data: () => ({
    challenges: [],
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
        this.challenges = data.data.challenges
        console.log(data.data)
      }
    },
  },
}
</script>

<style></style>
