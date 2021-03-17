<template>
  <div v-if="loaded">
    <div class="days">
      {{ displayDays }}
      <span>days</span>
    </div>
    <div class="hours">
      {{ displayHours }}
      <span>hours</span>
    </div>

    <div class="minutes">
      {{ displayMinutes }}
      <span>minutes</span>
    </div>

    <div class="seconds">
      {{ displaySeconds }}
      <span>seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false,
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
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      )
    },
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const distance = this.end.getTime() - now.getTime()
        if (distance < 0) {
          clearInterval(timer)
          this.loaded = true
          this.expired = true
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

        this.loaded = true
      }, 1000)
    },
  },
}
</script>

<style></style>
