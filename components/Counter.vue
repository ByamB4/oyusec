<template>
  <ul v-if="loaded" class="vuejs-countdown">
    <li v-if="displayDays > 0">
      <p class="digit">{{ displayDays | twoDigits }}</p>
      <p class="text">өдөр</p>
    </li>
    <li>
      <p class="digit">{{ displayHours | twoDigits }}</p>
      <p class="text">цаг</p>
    </li>
    <li>
      <p class="digit">{{ displayMinutes | twoDigits }}</p>
      <p class="text">мин</p>
    </li>
    <li>
      <p class="digit">{{ displaySeconds | twoDigits }}</p>
      <p class="text">сек</p>
    </li>
  </ul>
</template>

<script>
export default {
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString()
      }
      return value.toString()
    },
  },
  props: {
    year: { type: String },
    month: { type: String },
    date: { type: String },
    hour: { type: String },
    minute: { type: String },
    second: { type: String },
    millisecond: { type: String },
  },
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

<style>
.vuejs-countdown {
  padding: 0;
  margin: 0;
}
.vuejs-countdown li {
  display: inline-block;
  margin: 0 8px;
  text-align: center;
  position: relative;
}
.vuejs-countdown li p {
  margin: 0;
}
.vuejs-countdown li:after {
  content: ":";
  position: absolute;
  top: 0;
  right: -13px;
  font-size: 38px;
}
.vuejs-countdown li:first-of-type {
  margin-left: 0;
}
.vuejs-countdown li:last-of-type {
  margin-right: 0;
}
.vuejs-countdown li:last-of-type:after {
  content: "";
}
.vuejs-countdown .digit {
  font-size: 45px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0;
}
.vuejs-countdown .text {
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 12px;
}
</style>
