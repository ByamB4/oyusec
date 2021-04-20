<template>
  <v-container fluid class="challenges">
    <v-row v-if="competition.status === 'Удахгүй'" justify="center">
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
      <v-col v-if="loggedIn" cols="12" class="d-flex justify-end">
        <v-checkbox
          v-model="isHideSolved"
          class="font-play"
          color="orange"
          label="Бодсон бодлого нуух"
        >
        </v-checkbox>
      </v-col>
      <v-col cols="12" :class="{ 'mt-n10': loggedIn }">
        <div v-for="category in categories" :key="category.name">
          <div class="category">
            <h2 class="font-play" v-text="category.name" />
          </div>
          <v-expansion-panels popout tile inset>
            <Challenge
              v-for="challenge in category.challenges.filter(
                ({ solved }) => !isHideSolved || !solved
              )"
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
import { mapGetters, mapState } from "vuex"

export default {
  data: () => ({
    isHideSolved: false
  }),
  computed: {
    ...mapGetters({
      competition: "competition/getCompetition",
      categories: "competition/getCategories"
    }),
    ...mapState({
      loggedIn: (state) => state.auth.loggedIn
    }),
    start_date() {
      return new Date(this.competition.start_date)
    }
  },
  created() {
    this.$store.dispatch("competition/updateChallenges")
    this.$store.dispatch("competition/updateChallengesSolves")
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$store.dispatch("competition/updateChallenges")
      this.$store.dispatch("competition/updateChallengesSolves")
    }, 10 * 60000)
  },
  destroyed() {
    clearInterval(this.interval)
  }
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
