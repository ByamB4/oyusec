<template>
  <v-card class="user-bg">
    <v-card-title>
      <v-row align="center">
        <v-col cols="6" xs="6" sm="2" md="2" lg="2" xl="2">
          <v-progress-circular
            :size="100"
            :width="4"
            value="100"
            color="light-green accent-3"
            class="big-small-circle"
          >
            <v-icon size="40" color="white">mdi-trophy</v-icon>
          </v-progress-circular>
        </v-col>
        <v-col cols="6" xs="6" sm="5" md="6" lg="6" xl="6">
          <span class="text-uppercase text-gray-400 f-15">
            <span v-if="comp" v-text="$t('upcomingContest')" />
            <span v-else v-text="$t('noCompetitionFound')" />
          </span>
          <h3 v-text="comp.name" />
        </v-col>
        <v-col cols="12" xs="6" sm="5" md="4" lg="4" xl="4">
          <v-row no-gutters>
            <v-col cols="5" class="text-uppercase text-gray-400 f-13">
              <h4 v-text="$t('rating')" />
              <h4 v-text="$t('enrollment')" />
              <h4 v-text="$t('timeLeft')" />
            </v-col>
            <v-col cols="7" class="f-16 text-capitalize">
              <h4 v-text="comp.weight" />
              <h4 v-text="comp.enrollment" />
              <h4 v-if="comp.start_date">
                {{ displayDays }}d {{ displayHours }}h {{ displayMinutes }}m
                {{ displaySeconds }}s
              </h4>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    comp: false,
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
    end() {
      return new Date(this.comp.start_date)
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { data } = await this.$axios.get("api/competitions/coming/")
      if (data.success) {
        this.comp = data.data
        this.showRemaining()
      } else {
        this.comp = false
      }
    },
    formatNum: (num) => (num < 10 ? "0" + num : num),
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString()
      }
      return value.toString()
    },
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const distance = this.end.getTime() - now.getTime()
        if (distance < 0) {
          clearInterval(timer)
          return
        }

        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)

        this.displayMinutes = this.formatNum(minutes)
        this.displaySeconds = this.formatNum(seconds)
        this.displayHours = this.formatNum(hours)
        this.displayDays = this.formatNum(days)
      }, 1000)
    },
  },
}
</script>
