<template>
  <v-row no-gutters>
    <v-col cols="12" class="text-center">
      <h2>Statistics</h2>
    </v-col>
    <v-col cols="12" class="mt-5">
      <v-row>
        <v-col cols="6">
          <span class="opacity-70">Total submission</span>
        </v-col>
        <v-col cols="6">
          <span class="font-semibold text-lg" v-text="comp.submission_count" />
        </v-col>
        <v-col cols="6">
          <span class="opacity-70">Max score</span>
        </v-col>
        <v-col cols="6">
          <span class="font-semibold text-lg" v-text="comp.max_score" />
        </v-col>
        <v-col cols="6">
          <span class="opacity-70">Time left</span>
        </v-col>
        <CounterSmall
          :year="start_date.getFullYear()"
          :month="start_date.getMonth()"
          :date="start_date.getDate()"
          :hour="start_date.getHours()"
          :minute="start_date.getMinutes()"
          :second="start_date.getSeconds()"
          :millisecond="0"
        />
        <!-- <v-col cols="6" jusitfy="center">
          <span class="font-semibold ml-10">
          </span>
        </v-col> -->
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      comp: "competition/getCompetition",
    }),
    start_date() {
      return new Date(this.comp.end_date);
    },
  },
};
</script>

<style></style>
