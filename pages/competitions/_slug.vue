<template>
  <v-container fluid>
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
        <v-tabs hide-slider>
          <v-tab v-for="tab in $t('competitionTab.slugMenu')" :key="tab.title">
            <v-icon>{{ tab.icon }}</v-icon>
            <span class="ml-3" v-text="tab.title" />
          </v-tab>
          <v-tab-item>
            <CompetitionsSlugDetail />
          </v-tab-item>
          <v-tab-item>
            <CompetitionsSlugChallenges />
          </v-tab-item>
          <v-tab-item>
            <CompetitionsSlugScoreboard />
          </v-tab-item>
          <v-tab-item>
            <CompetitionsSlugStatistic />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  async asyncData(context) {
    const { slug } = context.params
    await Promise.all([
      context.store.dispatch("competition/updateCompetition", slug)
    ])
  },
  head() {
    return {
      title: this.competition.name,
      meta: [
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Тэмцээн | Мэдээллийн аюулгүй байдал, сүлжээний бодлогууд дээр өөрийн ур чадварыг шалган оноо цуглуулан бусадтай хөгжөөнт байдлаар бусадтайгаа өрсөлдөх"
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      competition: "competition/getCompetition"
    })
  }
}
</script>
