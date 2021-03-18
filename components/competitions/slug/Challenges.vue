<template>
  <v-container fluid class="font-exo challenges">
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
    <v-row v-else justify="center">
      <v-col cols="12">
        <div v-for="category in categories" :key="category.name">
          <div class="category font-cabin">
            <h2 v-text="category.name" />
          </div>
          <v-expansion-panels popout tile>
            <challenge
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
  components: {
    challenge: () => import("~/components/Challenge"),
    counter: () => import("~/components/Counter"),
  },

  computed: {
    ...mapGetters({
      competition: "competition/getCompetition",
      categories: "competition/getCategories",
    }),
  },
  created() {
    // If component loaded run once time
    if (this.competition.status !== "Удахгүй") {
      this.$store.dispatch("competition/updateChallenges")
      this.$store.dispatch("competition/updateChallengesSolves")
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.competition.status !== "Удахгүй") {
        this.$store.dispatch("competition/updateChallenges")
        this.$store.dispatch("competition/updateChallengesSolves")
      }
    }, 10 * 1000)
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
