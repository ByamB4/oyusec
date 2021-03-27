<template>
  <v-container fluid class="font-exo challenges">
    <v-row v-if="competition.status === 'Удахгүй'">
      <v-col cols="12" align="center">
        <Counter
          :year="start_date.getFullYear()"
          :month="start_date.getMonth()"
          :date="start_date.getDate()"
          :hour="start_date.getHours()"
          :minute="start_date.getMinutes()"
          :second="start_date.getSeconds()"
          :millisecond="0"
        />
      </v-col>
    </v-row>
    <v-row v-else justify="center">
      <v-col cols="12">
        <div v-for="category in categories" :key="category.name">
          <div class="category">
            <h2 v-text="category.name" />
          </div>
          <v-expansion-panels popout tile>
            <Challenge
              v-for="challenge in category.challenges"
              :key="challenge.id"
              :challenge="challenge"
              :status="competition.status"
            />
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      competition: "competition/getCompetition",
      categories: "competition/getCategories",
    }),
    start_date() {
      return new Date(this.competition.start_date)
    },
  },
  created() {
    this.$store.dispatch("competition/updateChallenges")
    this.$store.dispatch("competition/updateChallengesSolves")
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$store.dispatch("competition/updateChallenges")
      this.$store.dispatch("competition/updateChallengesSolves")
    }, 10 * 6000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
}
</script>

<style lang="sass">
.challenges
  .category
    letter-spacing: 2px
    text-transform: capitalize
    display: flex
    margin-top: 10px
    flex-direction: row
    justify-content: space-between
    align-self: center

  .information
    letter-spacing: 2px
</style>
