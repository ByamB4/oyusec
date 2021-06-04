import get from "lodash/get";
// import groupBy from "lodash/groupBy"

export const state = () => ({
  challenges: [],
  challengesVisited: [],
  challengesSolves: [],
  solves: new Set(),
  tab: 0,
  categoryOrders: [
    "Forensics",
    "Miscellaneous",
    "Cryptography",
    "Web",
    "Binary exploitation",
    "Reverse engineering",
  ],
});

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
  // Object.entries(groupBy(state.challenges, ({ category }) => category))
  //   .map(([name]) => ({
  //     name,
  //   }))
  //   .sort((a, b) => {
  //     const orderA = categoryOrders.indexOf(a.name.toLowerCase())
  //     const orderB = categoryOrders.indexOf(b.name.toLowerCase())
  //     return (orderA === -1 ? 9999 : orderA) - (orderB === -1 ? 9999 : orderB)
  //   }),
};

export const mutations = {
  SET_TAB: (s, p) => (s.tab = p),
  SET_CHALLENGES: (s, p) => (s.challenges = p),
  SET_CHALLENGES_SOLVES: (s, p) => (s.challengesSolves = p),
  SET_SOLVES: (s, p) =>
    (s.solves = new Set(p.map((solve) => solve.challenge_id))),
  ADD_CHALLENGE_SOLVE(s, p) {
    s.solves.add(p);
    const target = s.challengesSolves.find((challenge) => challenge.id === p);
    Object.assign(target, {
      solves: target.solves + 1,
    });
  },
  ADD_CHALLENGE_VISIT: (s, p) => s.challengesVisited.unshift(p),
};

export const actions = {
  async updateChallenges({ commit, dispatch }) {
    const { data } = await this.$axios.get("api/challenges/");
    commit("SET_CHALLENGES", data.data);
    await dispatch("updateSolved");
  },
  async updateChallengesSolves({ commit }) {
    const { data } = await this.$axios.get("api/challenges/solves/");
    commit("SET_CHALLENGES_SOLVES", data.data);
  },
  async updateSolved({ commit }) {
    const { data } = await this.$axios.get("api/user/solves/");
    if (data.success) {
      commit("SET_SOLVES", data.data);
    }
  },
  async getChallenge({ commit, state }, { id }) {
    const target = state.challengesVisited.findIndex(
      (chall) => chall.id === id
    );
    if (target === -1) {
      const { data } = await this.$axios.get(`api/challenge/${id}/`);
      commit("ADD_CHALLENGE_VISIT", data.data);
      return data.data;
    }
    return state.challengesVisited[target];
  },
};
