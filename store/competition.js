import get from "lodash/get"
import groupBy from "lodash/groupBy"

const categoryOrders = [
  // Default category order, not editable
  "misc",
  "crypto",
  "reverse",
]

export const state = () => ({
  competition: {},
  competitions: {},
  challenges: [],
  challengesSolves: [],
  solves: new Set(),
})

export const getters = {
  getLive: (state) => state.competitions.live,
  getArchive: (state) => state.competitions.archive,
  getComing: (state) => state.competitions.coming,
  getCompetition: (state) => state.competition,
  getChallenges: (state) =>
    state.challenges.map((challenge) => ({
      ...challenge,
      solved: state.solves.has(challenge.id),
      solves: get(
        state.challengesSolves.find(
          ({ challengeID }) => challengeID === challenge.id
        ),
        "solves",
        0
      ),
    })),
  getCategories: (state, getters) =>
    Object.entries(groupBy(getters.getChallenges, ({ category }) => category))
      .map(([name, challenges]) => ({
        name,
        challenges: challenges.sort((a, b) => a.value - b.value),
      }))
      .sort((a, b) => {
        const orderA = categoryOrders.indexOf(a.name.toLowerCase())
        const orderB = categoryOrders.indexOf(b.name.toLowerCase())
        return (orderA === -1 ? 9999 : orderA) - (orderB === -1 ? 9999 : orderB)
      }),
}

export const mutations = {
  SET_COMPETITIONS(state, payload) {
    state.competitions = payload
  },
  SET_COMPETITION(state, payload) {
    state.competition = payload
    state.competition.start_date = new Date(state.competition.start_date)
    state.competition.end_date = new Date(state.competition.end_date)
  },
  SET_CHALLENGES(state, payload) {
    state.challenges = payload
  },
  SET_CHALLENGES_SOLVES(state, payload) {
    state.challengesSolves = payload
  },
  SET_SOLVES(state, payload) {
    state.solves = new Set(payload.map((solve) => solve.challenge_id))
  },
  ADD_CHALLENGE_SOLVE(state, payload) {
    const target = state.challengesSolves.find(
      (challenge) => challenge.challengeID === payload
    )
    Object.assign(target, {
      solves: target.solves + 1,
    })
  },
}

export const actions = {
  async updateCompetition({ commit, state }, slug = false) {
    if (slug) {
      const { data } = await this.$axios.get(`api/competition/${slug}/`)
      commit("SET_COMPETITION", data.data)
    } else {
      const { data } = await this.$axios.get(
        `api/competition/${state.competition.slug}/`
      )
      commit("SET_COMPETITION", data.data)
    }
  },
  async updateCompetitions({ commit, dispatch }) {
    const { data } = await this.$axios.get("api/competitions/")
    commit("SET_COMPETITIONS", data.data)
  },
  async updateChallenges({ commit, dispatch, state }) {
    const { data } = await this.$axios.get(
      `api/competition/${state.competition.slug}/challenges/`
    )
    if (data.success) {
      commit("SET_CHALLENGES", data.data)
    }
  },
  async updateChallengesSolves({ commit, state }) {
    const { data } = await this.$axios.get(
      `api/competition/${state.competition.slug}/challenges/solves/`
    )
    commit("SET_CHALLENGES_SOLVES", data.data)
  },
  async updateSolved({ commit }) {
    const { data } = await this.$axios.get("api/user/solves/")
    if (data.success) {
      commit("SET_SOLVES", data.data)
    }
  },
}
