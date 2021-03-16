<template>
  <v-container class="py-0">
    <v-row>
      <v-col cols="12" align="center">
        <v-avatar color="primary" rounded size="150">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
        </v-avatar>
        <h1 v-text="competition.name" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs>
          <v-tab v-for="tab in tabs" :key="tab">
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
import Detail from "~/components/competitions/slug/Detail"
import Challenges from "~/components/competitions/slug/Challenges"
import Scoreboard from "~/components/competitions/slug/Scoreboard"

export default {
  components: { Detail, Challenges, Scoreboard },
  data: () => ({
    competition: {},
    tabs: ["Тухай", "Бодлогууд", "Онооны самбар"],
  }),
  head() {
    return {
      title: this.$route.params.slug,
    }
  },
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
      }
    },
  },
}
</script>

<style></style>
