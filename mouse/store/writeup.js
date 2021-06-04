import Vue from "vue";

export const state = () => ({
  challenge: {},
  writeups: [],
  writeup: {},
});

export const getters = {
  getWriteups: (s) => s.writeups,
  getWriteup: (s) => s.writeup,
  getChallenge: (state) => state.challenge,
};

export const mutations = {
  SET_CHALLENGE: (s, p) => (s.challenge = p),
  SET_WRITEUPS: (s, p) => (s.writeups = p),
  SET_WRITEUP: (s, p) => (s.writeup = p),
  SET_DISLIKE(s, p) {
    const target = s.writeups.findIndex((writeup) => writeup.id === p.id);
    if (p.status === "dislike") {
      p.status = null;
      p.power += 1;
    } else if (p.status === "like") {
      p.status = "dislike";
      p.power -= 2;
    } else {
      p.status = "dislike";
      p.power -= 1;
    }
    Vue.set(state.writeups, target, p);
  },
  SET_LIKE(s, p) {
    const t = s.writeups.findIndex((wrt) => wrt.id === p.id);
    if (p.liked) {
      p.liked = false;
      p.likes -= 1;
    } else {
      p.liked = true;
      p.likes += 1;
    }
    Vue.set(s.writeups, t, p);
  },
  ADD_WRITEUP: (s, p) => s.writeups.unshift(p),
};

export const actions = {
  async updateWriteups({ commit }) {
    const { data } = await this.$axios.get("api/writeups/");
    commit("SET_WRITEUPS", data.data);
  },
  async updateWriteup({ commit, state }, id = false) {
    if (id) {
      const { data } = await this.$axios.get(`api/writeup/${id}/`);
      if (data.success) {
        commit("SET_WRITEUP", data.data);
      }
    }
  },
  async addWriteup({ commit }, { $id, $data }) {
    const { data } = await this.$axios.post("api/challenges/writeup/", {
      action: "add",
      id: $id,
      data: $data,
    });
    if (data.success) {
      commit("ADD_WRITEUP", data.data);
    } else {
      this.$toast.error(data.detail, {
        icon: "alert-circle",
      });
    }
  },
  async like({ commit }, { wrt }) {
    commit("SET_LIKE", wrt);
    await this.$axios.post(`api/writeup/${wrt.id}/`, {
      action: "like",
    });
  },
};
