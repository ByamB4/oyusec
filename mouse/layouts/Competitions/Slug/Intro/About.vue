<template>
  <v-row no-gutters>
    <v-col class="hidden-sm-and-down" cols="6" md="6" lg="6" xl="6">
      <v-img
        lazy-src="/loading-contest.png"
        :alt="competition.name"
        :src="competition.photo"
        height="200"
        class="rounded-lg"
      />
    </v-col>
    <v-col cols="6" sm="12" md="6" lg="6" xl="6">
      <h2 class="text-center" v-text="competition.name" />
      <div class="d-flex justify-space-between">
        <v-chip class="ma-2" color="indigo darken-3">
          <v-icon
            v-if="competition.status === $app.competition.live.mn"
            left
            :color="$app.competition.live.color"
            v-text="$app.competition.live.icon"
          />
          <v-icon
            v-else-if="competition.status === $app.competition.coming.mn"
            left
            :color="$app.competition.coming.color"
            v-text="$app.competition.coming.icon"
          />
          <v-icon
            v-else-if="competition.status === $app.competition.archive.mn"
            left
            :color="$app.competition.archive.color"
            v-text="$app.competition.archive.icon"
          />
          <span class="font-semibold white--text" v-text="competition.status" />
        </v-chip>
        <v-chip color="indigo darken-3" class="ma-2">
          <v-icon left color="white">mdi-star</v-icon>
          <span class="font-semibold white--text" v-text="competition.weight" />
        </v-chip>
        <v-chip color="indigo darken-3" class="ma-2">
          <v-icon left color="white">mdi-account</v-icon>
          <span
            class="font-semibold white--text"
            v-text="competition.user_count"
          />
        </v-chip>
      </div>
      <v-avatar
        v-for="_ in competition.authors"
        :key="_.username"
        size="50"
        rounded
        class="ma-1"
      >
        <v-img :src="_.photo" :alt="_.username" />
      </v-avatar>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      competition: "competition/getCompetition",
    }),
  },
};
</script>

<style></style>
