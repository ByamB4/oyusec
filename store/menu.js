export const state = () => ({
  leftMenu: [
    {
      icon: "mdi-sword-cross",
      color: "green accent-4",
      title: "Бодлого",
      link: "/challenges",
    },
    {
      icon: "mdi-sword",
      color: "blue ligthen-2",
      title: "Тэмцээн",
      link: "/competitions",
    },
    {
      icon: "mdi-chart-histogram",
      color: "yellow darken-2",
      title: "Самбар",
      link: "/scoreboard",
    },
  ],
  adminMenu: [
    {
      icon: "mdi-wrench",
      title: "Тохиргоо",
      color: "red",
      to: "/admin/config",
    },
    {
      icon: "mdi-sword-cross",
      title: "Бодлогууд",
      color: "blue",
      to: "/admin/challenges",
    },
  ],
  authMenu: [
    {
      icon: "mdi-account-plus",
      color: "green accent-4",
      name: "Бүртгүүлэх",
      link: "/register",
    },
    {
      icon: "mdi-login",
      color: "orange darken-4",
      name: "Нэвтрэх",
      link: "/login",
    },
  ],
})

export const getters = {
  leftMenu: (state) => state.leftMenu,
  authMenu: (state) => state.authMenu,
  adminMenu: (state) => state.adminMenu,
}
