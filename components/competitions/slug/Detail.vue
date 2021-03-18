<template>
  <v-card class="user-bg font-exo my-3">
    <v-row>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-map-marker</v-icon>
          <span>Байршил</span>
        </h4>
        <span v-text="competition.location" />
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-account</v-icon>
          <span>Элсэлт</span>
        </h4>
        <span v-text="competition.enrollment" />
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-calendar-month</v-icon>
          <span>Эхлэх хугацаа</span>
        </h4>
        <span>
          {{ start_year }}-{{ start_month | twoDigits }}-{{
            start_day | twoDigits
          }}
          {{ start_hour | twoDigits }}:{{ start_minute | twoDigits }}
        </span>
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-calendar-month</v-icon>
          <span>Дуусах хугацаа</span>
        </h4>
        <span>
          {{ end_year }}-{{ end_month | twoDigits }}-{{ end_day | twoDigits }}
          {{ end_hour | twoDigits }}:{{ end_minute | twoDigits }}
        </span>
      </v-col>
    </v-row>
    <v-card-title>
      <v-icon color="white">mdi-file-document-outline</v-icon>
      <h4 class="ml-2">Тайлбар</h4>
    </v-card-title>
    <v-card-text>
      <div class="f-17" v-html="$md.render(competition.description)" />
    </v-card-text>
    <v-card-title>
      <v-icon color="white">mdi-lock-check</v-icon>
      <h4 class="ml-2">Дүрэм</h4>
    </v-card-title>
    <v-card-text>
      <div class="f-17" v-html="$md.render(competition.rule)" />
    </v-card-text>
    <v-card-title>
      <v-icon color="white">mdi-trophy</v-icon>
      <h4 class="ml-2">Шагнал</h4>
    </v-card-title>
    <v-card-text>
      <div class="f-17" v-html="$md.render(competition.prize)" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString()
      }
      return value.toString()
    },
  },
  computed: {
    ...mapGetters({
      competition: "competition/getCompetition",
    }),
    start_year() {
      return this.competition.start_date.getFullYear()
    },
    start_month() {
      return this.competition.start_date.getMonth()
    },
    start_day() {
      return this.competition.start_date.getDate()
    },
    start_hour() {
      return this.competition.start_date.getHours()
    },
    start_minute() {
      return this.competition.start_date.getMinutes()
    },
    end_year() {
      return this.competition.end_date.getFullYear()
    },
    end_month() {
      return this.competition.end_date.getMonth()
    },
    end_day() {
      return this.competition.end_date.getDate()
    },
    end_hour() {
      return this.competition.end_date.getHours()
    },
    end_minute() {
      return this.competition.end_date.getMinutes()
    },
  },
}
</script>

<style></style>
