const time = {
  formatNum: (num) => (num < 10 ? "0" + num : num),
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
