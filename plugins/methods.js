const time = {
  formatNum: (num) => (num < 10 ? "0" + num : num),
  // sec() {
  //   return 1000
  // },
  // min() {
  //   return this.sec * 60
  // },
  // hour() {
  //   return this.min * 60
  // },
  // day() {
  //   return this.hour * 24
  // },

  timeLeft(dist) {
    const sec = 1000
    const min = sec * 60
    const hour = min * 60
    const day = hour * 24
    return {
      seconds: Math.floor((dist % min) / sec),
      minutes: Math.floor((dist % hour) / min),
      hours: Math.floor((dist % day) / hour),
      days: Math.floor(dist / day),
    }
  },
}

export default ({ app }, inject) => {
  inject("time", time)

  // rules
  const i18n = app.i18n

  const rules = {
    counter: (value) => value.length <= 25 || i18n.t("max25Character"),
    required: (value) => !!value || i18n.t("required"),
    limitPass: (value) => value.length >= 8 || i18n.t("limitPass"),
    letterOnly: (value) => {
      const pattern = /^[A-Za-z0-9]+$/
      return pattern.test(value) || i18n.t("letterOnly")
    },
    email: (value) => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || i18n.t("checkAgain")
    },
  }
  inject("rules", rules)
}
