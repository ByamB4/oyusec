import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

var ls = new SecureLS({ encodingType: "aes", isCompression: true });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appname: "OyuSec",
    googleSignInParams: {
      client_id:
        "803463525682-7pbrl3t6b4l0nb78v759168o7nil9g0v.apps.googleusercontent.com",
    },
    isLogged: false,
    user: {},
    profile: {},
    token: "",
    drawer: null,
    loading: false,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },

    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },

    SET_USER(state, data) {
      state.user = data.user;
      state.token = data.token;
      state.isLogged = true;
    },
    SET_PROFILE(state, data) {
      state.profile = data;
    },
    REMOTE_USER(state) {
      state.isLogged = false;
      state.user = {};
      state.profile = {};
      state.token = "";
    },
  },
  modules: {},
});
