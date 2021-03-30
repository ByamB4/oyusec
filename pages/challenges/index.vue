<template>
  <v-container fluid class="challenges">
    <v-row justify="center">
      <v-col v-if="loggedIn" cols="11" class="d-flex justify-end">
        <v-checkbox
          v-model="isHideSolved"
          dark
          class="font-play"
          color="orange"
          label="Бодсон бодлого нуух"
        >
        </v-checkbox>
      </v-col>
      <v-col cols="11" :class="{ 'mt-n10': loggedIn }">
        <div v-for="category in categories" :key="category.name">
          <div class="category">
            <h2 class="font-play" v-text="category.name" />
          </div>
          <v-expansion-panels popout tile inset dark>
            <Challenge
              v-for="challenge in category.challenges.filter(
                ({ solved }) => !isHideSolved || !solved
              )"
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
  async asyncData(context) {
    await Promise.all([
      context.store.dispatch("challenge/updateChallenges", context),
      context.store.dispatch("challenge/updateChallengesSolves", context),
    ])
  },
  data: () => ({
    isHideSolved: false,
  }),
  head: () => ({
    title: "Бодлогууд",
  }),
  computed: {
    ...mapGetters({
      categories: "challenge/getCategories",
    }),
    ...mapState({
      isStarted: "isStarted",
      loggedIn: (state) => state.auth.loggedIn,
    }),
  },
}
</script>

<style lang="sass">
.challenges
  position: relative
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
