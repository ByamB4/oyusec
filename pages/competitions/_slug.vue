<template>
  <v-container class="py-0">
    <v-row>
      <v-col cols="12" align="center">
        <v-img
          lazy-src="/loading-contest.png"
          alt="competition thumbnail"
          :src="competition.photo"
          width="200"
          height="200"
          contain
        />
        <h1 class="font-exo">
          {{ competition.name }}
          <v-chip class="ma-2" color="indigo darken-3">
            <v-icon color="white" left> mdi-fire </v-icon>
            <span class="white--text" v-text="competition.status" />
          </v-chip>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs>
          <v-tab v-for="tab in $t('competitionTab.slugMenu')" :key="tab">
            <span v-text="tab" />
          </v-tab>
          <v-tab-item>
            <Detail />
          </v-tab-item>
          <v-tab-item>
            <Challenges />
          </v-tab-item>
          <v-tab-item>
            <Scoreboard />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  components: {
    Detail: () => import("~/components/competitions/slug/Detail"),
    Challenges: () => import("~/components/competitions/slug/Challenges"),
    Scoreboard: () => import("~/components/competitions/slug/Scoreboard"),
  },
  head() {
    return {
      title: this.$route.params.slug,
    }
  },
  computed: {
    ...mapGetters({
      competition: "competition/getCompetition",
    }),
  },
  mounted() {
    this.$store.dispatch(
      "competition/updateCompetition",
      this.$route.params.slug
    )
  },
}
</script>
