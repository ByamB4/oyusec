import get from "lodash/get"
import groupBy from "lodash/groupBy"

const categoryOrders = [
  "reverse",
  "misc",
  "reverse challenge",
  "crypto challe",
  "crypto",
]

export const state = () => ({
  challenges: [],
  challengesSolves: [],
  solves: new Set(),
})

export const getters = {
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
  async updateChallenges({ commit, dispatch }) {
    const { data } = await this.$axios.get("api/challenges/")
    commit("SET_CHALLENGES", data.data)
    await dispatch("updateSolved")
  },
  async updateChallengesSolves({ commit }) {
    const { data } = await this.$axios.get("api/challenges/solves/")
    commit("SET_CHALLENGES_SOLVES", data.data)
  },
  async updateSolved({ commit }) {
    const { data } = await this.$axios.get("api/user/solves/")
    if (data.success) {
      commit("SET_SOLVES", data.data)
    }
  },
}
