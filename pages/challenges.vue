<template>
  <v-container fluid class="challenges">
    <v-row justify="center">
      <v-col cols="11">
        <div v-for="category in categories" :key="category.name">
          <div class="category font-cabin">
            <h2 v-text="category.name" />
          </div>
          <v-expansion-panels popout tile>
            <challenge
              v-for="challenge in category.challenges"
              :key="challenge.id"
              :challenge="challenge"
            />
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters } from "vuex"

export default {
  components: { challenge: () => import("~/components/Challenge") },
  async asyncData(context) {
    await Promise.all([
      context.store.dispatch("challenge/updateChallenges", context),
      context.store.dispatch("challenge/updateChallengesSolves", context),
    ])
  },
  head: () => ({
    title: "Бодлогууд",
  }),

  computed: {
    ...mapGetters({
      categories: "challenge/getCategories",
    }),
    ...mapState({
      isEnded: "isEnded",
      isStarted: "isStarted",
      loggedIn: (state) => state.auth.loggedIn,
      competition: (state) => state.competition,
    }),
  },

  mounted() {
    this.interval = setInterval(() => {
      this.$store.dispatch("challenge/updateChallenges")
      this.$store.dispatch("challenge/updateChallengesSolves")
    }, 10 * 1000) // 10 sec
  },

  destroyed() {
    clearInterval(this.interval)
  },

  methods: {
    contestStart() {
      this.$store.commit("SET_IS_STARTED")
    },
    contestEnd() {
      this.$store.commit("SET_IS_ENDED")
    },
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
