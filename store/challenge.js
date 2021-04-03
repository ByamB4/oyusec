import get from "lodash/get"
// import groupBy from "lodash/groupBy"

const categoryOrders = [
  "Forensics",
  "Cryptography",
  "Miscellaneous",
  "Web",
  "Binary exploitation",
  "Reverse engineering",
]

export const state = () => ({
  challenges: [],
  challengesVisited: [],
  challengesSolves: [],
  solves: new Set(),
  tab: 0,
})

export const getters = {
  getChallenges: (state) => (category) =>
    state.challenges
      .filter((chall) => chall.category === category)
      .map((chall) => ({
        ...chall,
        solved: state.solves.has(chall.uuid),
        solves: get(
          state.challengesSolves.find(({ id }) => id === chall.uuid),
          "solves",
          0
        ),
      })),
  getCategories() {
    return categoryOrders
  },
  // Object.entries(groupBy(state.challenges, ({ category }) => category))
  //   .map(([name]) => ({
  //     name,
  //   }))
  //   .sort((a, b) => {
  //     const orderA = categoryOrders.indexOf(a.name.toLowerCase())
  //     const orderB = categoryOrders.indexOf(b.name.toLowerCase())
  //     return (orderA === -1 ? 9999 : orderA) - (orderB === -1 ? 9999 : orderB)
  //   }),
}

export const mutations = {
  SET_TAB(state, payload) {
    state.tab = payload
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
    state.solves.add(payload)
    const target = state.challengesSolves.find(
      (challenge) => challenge.id === payload
    )
    Object.assign(target, {
      solves: target.solves + 1,
    })
  },
  ADD_CHALLENGE_VISIT(state, payload) {
    state.challengesVisited.unshift(payload)
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
  async getChallenge({ commit, state }, { id }) {
    const target = state.challengesVisited.findIndex((chall) => chall.id === id)
    if (target === -1) {
      const { data } = await this.$axios.get(`api/challenge/${id}/`)
      commit("ADD_CHALLENGE_VISIT", data.data)
      return data.data
    }
    return state.challengesVisited[target]
  },
}
