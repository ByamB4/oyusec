<template>
  <ul v-if="loaded" class="vuejs-countdown">
    <li v-if="displayTime.days > 0">
      <p class="digit" v-text="$time.formatNum(displayTime.days)" />
      <p class="text" v-text="$t('day')" />
    </li>
    <li>
      <p class="digit" v-text="$time.formatNum(displayTime.hours)" />
      <p class="text" v-text="$t('hour')" />
    </li>
    <li>
      <p class="digit" v-text="$time.formatNum(displayTime.minutes)" />
      <p class="text" v-text="$t('min')" />
    </li>
    <li>
      <p class="digit" v-text="$time.formatNum(displayTime.seconds)" />
      <p class="text" v-text="$t('sec')" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    year: { type: Number },
    month: { type: Number },
    date: { type: Number },
    hour: { type: Number },
    minute: { type: Number },
    second: { type: Number },
    millisecond: { type: Number },
  },
  data: () => ({
    displayTime: {},
    loaded: false,
  }),
  created() {
    this.showRemaining()
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(
          this.year,
          this.month,
          this.date,
          this.hour,
          this.minute,
          this.second,
          this.millisecond
        )
        const distance = end.getTime() - now.getTime()
        if (distance < 0) {
          clearInterval(timer)
          this.loaded = true
          this.expired = true
          return
        }
        this.displayTime = this.$time.timeLeft(distance)

        this.loaded = true
      }, 1000)
    },
  },
  destroyed() {
    clearInterval(this.timer)
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
