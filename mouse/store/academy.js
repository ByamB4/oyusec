export const state = () => ({
  academy: {},
  category: [],
  academies: [],
  sections: [],
  activeSection: 0,
});

export const getters = {
  getAcademies: (s) => s.academies,
  getAcademy: (s) => s.academy,
  getSections: (s) => s.sections,
  getSection: (s) => s.sections[s.activeSection],
  getActiveSection: (s) => s.activeSection,
  getCategory(s) {
    return Array.from(
      s.category.map((c) => ({
        count: s.academies.filter((ac) => ac.category === c).length,
        name: c,
      }))
    ).sort((a, b) => a.count - b.count);
  },
};

export const mutations = {
  SET_ACADEMIES: (s, p) => (s.academies = p),
  SET_CATEGORY(s) {
    s.category = new Set(s.academies.map((a) => a.category));
  },
  SET_ACTIVE_SECTION: (s, p) => (s.activeSection = p),
  SET_ACADEMY: (s, p) => (s.academy = p),
  SET_SECTIONS: (s, p) => (s.sections = p),
  SET_COMPLETE(s, p) {
    const t = s.sections.find((sec) => sec.id === p);
    Object.assign(t, {
      completed: true,
    });
  },
};

export const actions = {
  async updateAcademies({ commit, state }) {
    const { data } = await this.$axios.get("api/academy/tutorials/");
    commit("SET_ACADEMIES", data.data);
    commit("SET_CATEGORY");
  },
  async updateAcademy({ commit, state }, slug = false) {
    if (slug) {
      const { data } = await this.$axios.get(`api/academy/tutorial/${slug}/`);
      commit("SET_ACADEMY", data.data);
      commit("SET_ACTIVE_SECTION", 0);
      commit("SET_SECTIONS", data.data.sections);
    }
  },
  async sectionPost({ commit, state }, { id, form = {} }) {
    if (!this.$auth.loggedIn) {
      this.$toast.show("Эхлээд нэвтэрнэ үү", {
        icon: "alert-circle",
      });
    } else {
      const { data } = await this.$axios.post(`api/academy/section/${id}/`, {
        data: form,
      });
      if (data.success) {
        commit("SET_COMPLETE", id);
        this.$toast.success(data.detail, {
          icon: "check-circle",
        });
      } else {
        this.$toast.error(data.detail, {
          icon: "alert-circle",
        });
      }
    }
  },
};
