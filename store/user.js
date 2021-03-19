export const state = () => ({
  profile: {
    progress: 0,
  },
})

export const getters = {
  getProfile: (state) => state.profile,
}

export const mutations = {
  SET_PROFILE(state, payload) {
    state.profile = payload
  },
}
export const actions = {
  async getProfile({ commit, dispatch }, { slug }) {
    const { data } = await this.$axios.get(`api/user/profile/${slug}/`)
    commit("SET_PROFILE", data.data)
  },

  async loginUser({ commit, dispatch }, { auth, form }) {
    try {
      await auth.loginWith("local", {
        data: form,
      })
      await dispatch("getProfile", {
        slug: auth.user.slug,
      })
    } catch (error) {
      this.$toast.error("Нууц үг эсвэл нэр буруу байна", {
        icon: "alert-circle",
      })
    }
  },

  async registerUser({ commit }, { nuxt, form }) {
    const { data } = await this.$axios.post("api/auth/register/", form)

    if (data.success) {
      this.$toast.success("Хаяг амжилттай нээгдлээ", { icon: "check-circle" })
      nuxt.$router.push("login")
    } else {
      // Gonna finish this later
      this.$toast.error(data.detail, {
        icon: "alert-circle",
      })
    }
  },
}
