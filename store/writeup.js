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
  SET_CHALLENGE: (s, p) => (s.challenge = p),
  SET_WRITEUPS: (s, p) => (s.writeups = p),
  SET_DISLIKE(s, p) {
    const target = s.writeups.findIndex((writeup) => writeup.id === p.id)
    if (p.status === "dislike") {
      p.status = null
      p.power += 1
    } else if (p.status === "like") {
      p.status = "dislike"
      p.power -= 2
    } else {
      p.status = "dislike"
      p.power -= 1
    }
    Vue.set(state.writeups, target, p)
  },
  SET_LIKE(s, p) {
    const target = s.writeups.findIndex((writeup) => writeup.id === p.id)
    if (p.status === "like") {
      p.status = null
      p.power -= 1
    } else if (p.status === "dislike") {
      p.status = "like"
      p.power += 2
    } else {
      p.status = "like"
      p.power += 1
    }
    Vue.set(state.writeups, target, p)
  },
  ADD_WRITEUP: (s, p) => s.writeups.unshift(p),
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
