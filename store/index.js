export const state = () => ({
  drawer: false
})

export const mutations = {
  TOGGLE_DRAWER: (s) => (s.drawer = !s.drawer)
}
