export const state = () => ({
  scoreboard: [],
})

export const getters = {
  getScoreboard: (state) => {
    return state.scoreboard
  },
}

export const mutations = {
  SET_SCOREBOARD(state, payload) {
    state.scoreboard = payload
  },
}

export const actions = {
  async update({ dispatch }) {
    await Promise.all([dispatch("updateScoreboard")])
  },
  async updateScoreboard({ commit }) {
    const { data } = await this.$axios.get("api/scoreboard/")
    if (data.success) {
      commit("SET_SCOREBOARD", data.data)
    }
  },
}
