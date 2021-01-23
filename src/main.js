import Vue from "vue";
import App from "./App.vue";

// additional
import store from "./store";
import router from "./router";

// plugins
import vuetify from "./plugins/vuetify";
import GSignInButton from "vue-google-signin-button";
import axios from "axios";

const api = axios.create({
  baseURL: "https://oyusec.herokuapp.com/",
});

const axiosPlugin = {
  install(Vue) {
    Vue.prototype.$api = api;
  },
};

Vue.use(axiosPlugin);

Vue.use(GSignInButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
