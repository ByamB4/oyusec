<template>
  <v-card class="user-bg font-exo my-3">
    <v-row>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-map-marker</v-icon>
          <span v-text="$t('location')" />
        </h4>
        <span v-text="competition.location" />
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-star</v-icon>
          <span class="font-weight-bold" v-text="$t('rating')" />
        </h4>
        <span v-text="competition.weight" />
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-calendar-month</v-icon>
          <span v-text="$t('startsAt')" />
        </h4>
        <span v-text="start_date" />
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-calendar-month</v-icon>
          <span v-text="$t('endsAt')" />
        </h4>
        <span v-text="end_date" />
      </v-col>
    </v-row>
    <v-card-title>
      <v-icon color="white">mdi-file-document-outline</v-icon>
      <h4 class="ml-2" v-text="$t('description')" />
    </v-card-title>
    <v-card-text>
      <div class="f-17" v-html="$md.render(description)" />
    </v-card-text>
    <v-card-title>
      <v-icon color="white">mdi-lock-check</v-icon>
      <h4 class="ml-2" v-text="$t('rule')" />
    </v-card-title>
    <v-card-text>
      <div class="f-17" v-html="$md.render(rule)" />
    </v-card-text>
    <v-card-title>
      <v-icon color="white">mdi-trophy</v-icon>
      <h4 class="ml-2" v-text="$t('prizes')" />
    </v-card-title>
    <v-card-text>
      <div class="f-17" v-html="$md.render(prize)" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      competition: "competition/getCompetition",
    }),
    start_date() {
      const date = new Date(this.competition.start_date)
      return `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${this.formatNum(date.getHours())}:${this.formatNum(
        date.getMinutes()
      )}`
    },
    end_date() {
      const date = new Date(this.competition.end_date)
      return `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${this.formatNum(date.getHours())}:${this.formatNum(
        date.getMinutes()
      )}`
    },
    description() {
      return String(this.competition.description)
    },
    rule() {
      return String(this.competition.rule)
    },
    prize() {
      return String(this.competition.prize)
    },
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
  },
}
</script>
