<template>
  <v-card class="user-bg">
    <v-card-title>
      <v-row align="center">
        <v-col cols="6" xs="6" sm="2" md="2" lg="2" xl="2">
          <v-progress-circular
            :size="100"
            :width="4"
            value="100"
            class="big-small-circle"
            color="primary"
          >
            <v-icon size="40" color="white">mdi-trophy</v-icon>
          </v-progress-circular>
        </v-col>
        <v-col cols="6" xs="6" sm="5" md="6" lg="5" xl="6">
          <span class="text-uppercase text-gray-400 f-15">
            <span v-if="comp.length" v-text="$t('upcomingContest')" />
            <span v-else v-text="$t('noCompetitionFound')" />
          </span>
          <h3 v-text="comp.name" />
        </v-col>
        <v-col cols="12" xs="6" sm="5" md="4" lg="5" xl="4">
          <v-row no-gutters>
            <v-col cols="5" class="text-uppercase text-gray-400 f-13">
              <h4 v-text="$t('rating')" />
              <h4 v-text="$t('enrollment')" />
              <h4 v-text="$t('timeLeft')" />
            </v-col>
            <v-col cols="7" class="f-16 text-capitalize">
              <h4 v-text="comp.weight" />
              <h4 v-text="comp.enrollment" />
              <h4 v-if="comp.start_date" v-text="displayTime" />
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
    comp: {},
    displayTime: ""
  }),
  mounted() {
    this.fetchData()
  },
  destroyed() {
    clearInterval(this.timer)
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
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(this.comp.start_date)
        const distance = end.getTime() - now.getTime()
        if (distance < 0) {
          clearInterval(timer)
          return
        }
        const showTime = this.$time.timeLeft(distance)
        this.displayTime = `${showTime.days}d ${showTime.hours}h ${showTime.minutes}m ${showTime.seconds}s`
      }, 1000)
    }
  }
}
</script>
