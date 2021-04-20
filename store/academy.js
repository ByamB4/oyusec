export const state = () => ({
  academy: {},
  tutorial: {},
  academies: []
})

export const getters = {
  getAcademies: (s) => s.academies,
  getAcademy: (s) => s.academy
}

export const mutations = {
  SET_ACADEMIES: (s, p) => (s.academies = p),
  SET_ACTIVE_TUTORIAL: (s, p) => (s.tutorial = p),
  SET_ACADEMY: (s, p) => (s.academy = p)
}

export const actions = {
  async updateAcademies({ commit, state }) {
    const { data } = await this.$axios.get("api/academies/")
    commit("SET_ACADEMIES", data.data)
  },
  async updateAcademy({ commit, state }, slug = false) {
    if (slug) {
      const { data } = await this.$axios.get(`api/academy/${slug}/`)
      commit("SET_ACADEMY", data.data)
    }
  }
}
