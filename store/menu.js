export const state = () => ({
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
})

export const getters = {
  leftMenu: (state) => {
    return state.leftMenu
  },
  authMenu: (state) => state.authMenu,
  adminMenu: (state) => state.adminMenu,
}
