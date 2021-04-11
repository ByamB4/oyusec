export const state = () => ({
  challenges: [],
  drawer: true,
  connection: false,
})

export const mutations = {
  SET_COMPETITION: (s, p) => (s.competition = p),
  SET_DRAWER: (s, p) => (s.drawer = p),
  TOGGLE_DRAWER: (s) => (s.drawer = !s.drawer),
}

export const actions = {
  async getCompetition({ commit }) {
    const { data } = await this.$axios.get("api/config/")
    commit("SET_COMPETITION", data.data)
  },
}
