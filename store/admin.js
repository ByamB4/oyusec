import Vue from "vue"

export const state = () => ({
  configs: [],
  challenges: [],
  activeChallenge: {},
  teams: [],
  tab: "standard"
})

export const mutations = {
  SET_CHALLENGES: (s, p) => (s.challenges = p),
  SET_ACTIVE_CHALLENGE: (s, p) => (s.activeChallenge = p),
  SET_TAB: (s, p) => (s.tab = p),
  UPDATE_CHALLENGE(s, p) {
    const target = s.challenges.findIndex((challenge) => challenge.id === p.id)
    Vue.set(s.challenges, target, p)
  },
  ADD_CHALLENGE: (s, p) => s.challenges.unshift(p),
  ADD_ACTIVE_HINT: (s, p) => s.activeChallenge.hints.unshift(p),
  ADD_ACTIVE_FLAG: (s, p) => s.activeChallenge.flags.unshift(p),
  ADD_ACTIVE_TAG: (s, p) => s.activeChallenge.tags.unshift(p),
  REMOVE_CHALLENGE(s, p) {
    const newItems = s.challenges.filter((item) => item.id !== p)
    s.challenges = newItems
  },
  REMOVE_ACTIVE_HINT(s, p) {
    const newItems = s.activeChallenge.hints.filter((item) => item.id !== p)
    s.activeChallenge.hints = newItems
  },
  REMOVE_ACTIVE_FLAG(s, p) {
    const newItems = s.activeChallenge.flags.filter((item) => item.id !== p)
    s.activeChallenge.flags = newItems
  },
  REMOVE_ACTIVE_TAG(s, p) {
    const newItems = s.activeChallenge.tags.filter((item) => item.id !== p)
    s.activeChallenge.tags = newItems
  }
}
export const actions = {
  async update({ dispatch }) {
    await Promise.all([dispatch("updateChallenges")])
  },
  async updateConfigs({ commit }) {
    const { data } = await this.$axios.get("/api/admin/config/")
    commit(
      "SET_CONFIGS",
      data.data.map(({ key, value }) => ({ key, value }))
    )
  },
  async setConfig({ commit }, { form }) {
    const { data } = await this.$axios.post("api/admin/config/", {
      data: form
    })
    if (data.success) {
      commit("SET_COMPETITION", form, { root: true })
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async getChallenges({ commit }) {
    const { data } = await this.$axios.get("api/admin/challenges/")
    if (data.success) {
      commit("SET_CHALLENGES", data.data)
    }
  },
  async updateChallenge({ commit }, { form }) {
    const { data } = await this.$axios.post(`api/admin/challenge/${form.id}/`, {
      data: form
    })
    if (data.success) {
      commit("UPDATE_CHALLENGE", data.challenge)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async getChallenge({ commit }, { id }) {
    const { data } = await this.$axios.get(`api/admin/challenge/${id}/`)

    if (data.success) {
      commit("SET_ACTIVE_CHALLENGE", data.data)
    }
  },
  async addChallenge({ commit, dispatch }, { $form, $type }) {
    const { data } = await this.$axios.post("api/admin/challenges/add/", {
      data: $form,
      type: $type
    })
    if (data.success) {
      commit("ADD_CHALLENGE", data.challenge)
      this.$toast.success(data.detail, { icon: "check-circle" })
      // If added challenge is visible and competition is going we will add to challenges directly
      // if (data.challenge.state === this.$consts.VISIBLE_MN) {
      //   dispatch('challenge/updateChallenges', null, { root: true })
      // }
    } else {
      this.$toast.error(data.detail)
    }
  },
  async addHint({ state, commit }, { $data }) {
    const { data } = await this.$axios.post(`api/admin/hint/`, {
      data: $data,
      id: state.activeChallenge.id,
      type: "add"
    })
    if (data.success) {
      commit("ADD_ACTIVE_HINT", data.hint)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async addFlag({ state, commit }, { $data }) {
    const { data } = await this.$axios.post(`api/admin/flag/`, {
      data: $data,
      id: state.activeChallenge.id,
      type: "add"
    })
    if (data.success) {
      commit("ADD_ACTIVE_FLAG", data.flag)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async addTag({ state, commit }, { $data }) {
    const { data } = await this.$axios.post(`api/admin/tag/`, {
      data: $data,
      id: state.activeChallenge.id,
      type: "add"
    })
    if (data.success) {
      commit("ADD_ACTIVE_TAG", data.tag)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async deleteChallenge({ state, commit }, id) {
    const { data } = await this.$axios.post(`api/admin/challenge/${id}/delete/`)
    if (data.success) {
      commit("REMOVE_CHALLENGE", id)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async deleteHint({ commit }, { $id }) {
    const { data } = await this.$axios.post(`api/admin/hint/`, {
      id: $id,
      type: "delete"
    })
    if (data.success) {
      commit("REMOVE_ACTIVE_HINT", $id)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async deleteFlag({ commit }, { $id }) {
    const { data } = await this.$axios.post(`api/admin/flag/`, {
      id: $id,
      type: "delete"
    })
    if (data.success) {
      commit("REMOVE_ACTIVE_FLAG", $id)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async deleteTag({ commit }, { $id }) {
    const { data } = await this.$axios.post(`api/admin/tag/`, {
      id: $id,
      type: "delete"
    })
    if (data.success) {
      commit("REMOVE_ACTIVE_TAG", $id)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  }
}
