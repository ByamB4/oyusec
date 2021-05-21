<template>
  <v-col v-if="loaded" cols="6" justify="center" class="font-semibold text-lg">
    <span
      v-if="displayTime.days > 0"
      v-text="$time.formatNum(displayTime.days) + 'd'"
    />
    <span class="ml-1" v-text="$time.formatNum(displayTime.hours) + 'h'" />
    <span class="ml-1" v-text="$time.formatNum(displayTime.minutes) + 'm'" />
    <span class="ml-1" v-text="$time.formatNum(displayTime.seconds) + 's'" />
  </v-col>
</template>

<script>
export default {
  props: {
    year: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    date: { type: Number, default: 0 },
    hour: { type: Number, default: 0 },
    minute: { type: Number, default: 0 },
    second: { type: Number, default: 0 },
    millisecond: { type: Number, default: 0 },
  },
  data: () => ({
    displayTime: {},
    loaded: false,
  }),
  created() {
    this.showRemaining();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(
          this.year,
          this.month,
          this.date,
          this.hour,
          this.minute,
          this.second,
          this.millisecond
        );
        const distance = end.getTime() - now.getTime();
        if (distance < 0) {
          clearInterval(timer);
          this.loaded = true;
          this.expired = true;
          return;
        }
        this.displayTime = this.$time.timeLeft(distance);

        this.loaded = true;
      }, 1000);
    },
  },
};
</script>
