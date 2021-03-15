export const state = () => ({
  competition: {},
})

export const getters = {
  getLive: (state) => state.competition.live,
  getUpcoming: (state) => state.competition.upcoming,
  getArchive: (state) => state.competition.archive,
}

export const mutations = {
  SET_COMPETITION(state, payload) {
    state.competition = payload
  },
}

export const actions = {
  async updateCompetition({ commit, dispatch }) {
    const { data } = await this.$axios.get("api/competition/")
    commit("SET_COMPETITION", data.data)
  },
}
