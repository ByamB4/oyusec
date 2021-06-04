export const state = () => ({
  profile: {
    progress: 0,
  },
});

export const getters = {
  getProfile: (s) => s.profile,
};

export const mutations = {
  SET_PROFILE: (s, p) => (s.profile = p),
  SET_PROFILE_SOCIAL: (s, p) => (s.profile.socials = p),
  SET_PROFILE_FULLNAME: (s, p) => (s.profile.fullname = p),
};
export const actions = {
  async getProfile({ commit, dispatch }, { slug }) {
    const { data } = await this.$axios.get(`api/user/profile/${slug}/`);
    commit("SET_PROFILE", data.data);
  },
  async loginUser({ commit, dispatch }, { auth, form }) {
    try {
      await auth.loginWith("local", {
        data: form,
      });
      await dispatch("getProfile", {
        slug: auth.user.slug,
      });
    } catch (error) {
      this.$toast.error("Нууц үг эсвэл нэр буруу байна", {
        icon: "alert-circle",
      });
    }
  },

  async registerUser({ commit }, { nuxt, form }) {
    const { data } = await this.$axios.post("api/auth/register/", form);

    if (data.success) {
      this.$toast.success("Хаяг амжилттай нээгдлээ", { icon: "check-circle" });
      return true;
    } else {
      // Gonna finish this later
      this.$toast.error(data.detail, {
        icon: "alert-circle",
      });
      return false;
    }
  },
  // Related profile
  async updateSocial({ commit }, { form }) {
    const { data } = await this.$axios.post(
      `api/user/edit/${this.$auth.user.id}/`,
      {
        data: form,
      }
    );
    if (data.success) {
      commit("SET_PROFILE_SOCIAL", data.data.socials);
      commit("SET_PROFILE_FULLNAME", data.data.fullname);
      this.$toast.success("Амжилттай шинэчлэгдлээ", {
        icon: "check-circle",
      });
    }
  },
};
