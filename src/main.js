import Vue from "vue";
import App from "./App.vue";

// additional
import store from "./store";
import router from "./router";

// plugins
import vuetify from "./plugins/vuetify";
import GSignInButton from "vue-google-signin-button";
import { Editor } from "vuetify-markdown-editor";
import axios from "axios";

import "vuetify-markdown-editor/dist/vuetify-markdown-editor.css";
import "@/sass/global.sass";

// const api = axios.create({
//   baseURL: "https://oyusec.herokuapp.com/",
// });

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

const axiosPlugin = {
  install(Vue) {
    Vue.prototype.$api = api;
  },
};

Vue.component("mark-down-editor", Editor);

Vue.use(axiosPlugin);
Vue.use(GSignInButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
