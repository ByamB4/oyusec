import Vue from "vue"

export const state = () => ({
  configs: [],
  challenges: [],
  activeChallenge: {},
  teams: [],
  tab: "standard",
})

export const mutations = {
  SET_CHALLENGES(state, payload) {
    state.challenges = payload
  },
  SET_ACTIVE_CHALLENGE(state, payload) {
    state.activeChallenge = payload
  },
  SET_TAB(state, payload) {
    state.tab = payload
  },
  SET_CONFIGS(state, payload) {
    state.configs = payload
  },
  UPDATE_CHALLENGE(state, payload) {
    const target = state.challenges.findIndex(
      (challenge) => challenge.id === payload.id
    )
    Vue.set(state.challenges, target, payload)
  },
  ADD_CHALLENGE(state, payload) {
    state.challenges.unshift(payload)
  },
  ADD_ACTIVE_HINT(state, payload) {
    state.activeChallenge.hints.unshift(payload)
  },
  ADD_ACTIVE_FLAG(state, payload) {
    state.activeChallenge.flags.unshift(payload)
  },
  ADD_ACTIVE_TAG(state, payload) {
    state.activeChallenge.tags.unshift(payload)
  },
  REMOVE_CHALLENGE(state, payload) {
    const newItems = state.challenges.filter((item) => item.id !== payload)
    state.challenges = newItems
  },
  REMOVE_ACTIVE_HINT(state, payload) {
    const newItems = state.activeChallenge.hints.filter(
      (item) => item.id !== payload
    )
    state.activeChallenge.hints = newItems
  },
  REMOVE_ACTIVE_FLAG(state, payload) {
    const newItems = state.activeChallenge.flags.filter(
      (item) => item.id !== payload
    )
    state.activeChallenge.flags = newItems
  },
  REMOVE_ACTIVE_TAG(state, payload) {
    const newItems = state.activeChallenge.tags.filter(
      (item) => item.id !== payload
    )
    state.activeChallenge.tags = newItems
  },
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
      data: form,
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
      data: form,
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
      type: $type,
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
      type: "add",
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
      type: "add",
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
      type: "add",
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
      type: "delete",
    })
    if (data.success) {
      commit("REMOVE_ACTIVE_HINT", $id)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async deleteFlag({ commit }, { $id }) {
    const { data } = await this.$axios.post(`api/admin/flag/`, {
      id: $id,
      type: "delete",
    })
    if (data.success) {
      commit("REMOVE_ACTIVE_FLAG", $id)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
  async deleteTag({ commit }, { $id }) {
    const { data } = await this.$axios.post(`api/admin/tag/`, {
      id: $id,
      type: "delete",
    })
    if (data.success) {
      commit("REMOVE_ACTIVE_TAG", $id)
      this.$toast.success(data.detail, { icon: "check-circle" })
    }
  },
}
