export const state = () => ({
  competition: {
    name: "OyuSec CTF",
    description:
      "Мэдээллийн аюулгүй байдлын чиглэлээр сонирхон суралцдаг хэн бүхэнд зориулан бүтээв, өрсөлдөөнт, хөгжилтэй байдлаар сурцгаая",
    state: "running",
  },
  isStarted: true,
  isEnded: false,
  challenges: [],
  drawer: false,
  connection: false,
})

export const mutations = {
  SET_COMPETITION(state, payload) {
    state.competition = payload
  },
  SET_IS_STARTED(state) {
    state.isStarted = !state.isStarted
  },
  SET_IS_ENDED(state) {
    state.isEnded = !state.isEnded
  },
  SET_CONNECTION(state, payload) {
    state.connection = payload
  },
  SET_DRAWER(state, payload) {
    state.drawer = payload
  },
  TOGGLE_DRAWER(state) {
    state.drawer = !state.drawer
  },
}

export const actions = {
  async getCompetition({ commit }) {
    const { data } = await this.$axios.get("api/config/")
    commit("SET_COMPETITION", data.data)
  },
  async checkConnection({ commit }) {
    try {
      await this.$axios.get("api/live/")
      commit("SET_CONNECTION", true)
    } catch (error) {
      commit("SET_CONNECTION", false)
      this.$toast.error("Холболт амжилтгүй боллоо", {
        icon: "alert-circle",
      })
    }
  },
}
