export default ({ app }, inject) => {
  inject("app", {
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
      color: "pink",
      live: {
        mn: "Шууд",
        en: "Live",
        icon: "mdi-fire",
        color: "white"
      },
      coming: {
        mn: "Удахгүй",
        en: "Coming",
        icon: "mdi-circle-slice-5",
        color: "white"
      },
      archive: {
        mn: "Дууссан",
        en: "Archive",
        icon: "mdi-archive",
        color: "white"
      }
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
