export default ({ app }, inject) => {
  inject("cs", {
    VISIBLE_MN: "Ил харагдана",
    academy: {
      icon: "mdi-school-outline",
      color: "light-green accent-3"
    },
    community: {
      icon: "mdi-account-group",
      color: "light-blue accent-3"
    },
    competition: {
      icon: "mdi-trophy",
      color: "pink"
    },
    practice: {
      icon: "mdi-sword",
      color: "cyan accent-3"
    },
    scoreboard: {
      icon: "mdi-chart-line",
      color: "yellow darken-3"
    }
  })
}
