import Vue from "vue"

export const state = () => ({
  challenge: {},
  writeups: [],
})

export const getters = {
  getWriteups: (state) => state.writeups.sort((a, b) => a.power - b.power),
  getChallenge: (state) => state.challenge,
}

export const mutations = {
  SET_CHALLENGE(state, payload) {
    state.challenge = payload
  },
  SET_WRITEUPS(state, payload) {
    state.writeups = payload
  },
  SET_DISLIKE(state, payload) {
    const target = state.writeups.findIndex(
      (writeup) => writeup.id === payload.id
    )
    if (payload.status === "dislike") {
      payload.status = null
      payload.power += 1
    } else if (payload.status === "like") {
      payload.status = "dislike"
      payload.power -= 2
    } else {
      payload.status = "dislike"
      payload.power -= 1
    }
    Vue.set(state.writeups, target, payload)
  },
  SET_LIKE(state, payload) {
    const target = state.writeups.findIndex(
      (writeup) => writeup.id === payload.id
    )
    if (payload.status === "like") {
      payload.status = null
      payload.power -= 1
    } else if (payload.status === "dislike") {
      payload.status = "like"
      payload.power += 2
    } else {
      payload.status = "like"
      payload.power += 1
    }
    Vue.set(state.writeups, target, payload)
  },
  ADD_WRITEUP(state, payload) {
    state.writeups.unshift(payload)
  },
}

export const actions = {
  async updateWriteups({ commit }, id) {
    const { data } = await this.$axios.get(`api/challenges/writeups/${id}/`)
    if (data.success) {
      commit("SET_WRITEUPS", data.data)
      commit("SET_CHALLENGE", data.challenge)
    } else {
      this.$toast.error(data.detail, {
        icon: "alert-circle",
      })
    }
  },
  async addWriteup({ commit }, { $id, $data }) {
    const { data } = await this.$axios.post("api/challenges/writeup/", {
      action: "add",
      id: $id,
      data: $data,
    })
    if (data.success) {
      commit("ADD_WRITEUP", data.data)
    } else {
      this.$toast.error(data.detail, {
        icon: "alert-circle",
      })
    }
  },
  async like({ commit }, writeup) {
    commit("SET_LIKE", writeup)
    await this.$axios.post("api/challenges/writeups/", {
      id: writeup.id,
      action: "like",
    })
  },
  async dislike({ commit }, writeup) {
    commit("SET_DISLIKE", writeup)
    await this.$axios.post("api/challenges/writeups/", {
      id: writeup.id,
      action: "dislike",
    })
  },
}
