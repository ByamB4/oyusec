import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/Index"),
      children: [
        {
          name: "Home",
          path: "",
          component: () => import("@/views/Home"),
        },
        {
          name: "Cryptography",
          path: "/crypto",
          props: {
            urlp: "cryptotography",
          },
          component: () => import("@/views/pages/Cryptography"),
        },
        {
          name: "Forensics",
          path: "/forensics",
          props: {
            urlp: "forensics",
          },
          component: () => import("@/views/pages/Forensics"),
        },
        {
          name: "Binary exploitation",
          path: "/pwn",
          props: {
            urlp: "pwn",
          },
          component: () => import("@/views/pages/Binary"),
        },
        {
          name: "Miscellaneous",
          path: "/misc",
          props: {
            urlp: "misc",
          },
          component: () => import("@/views/pages/Misc"),
        },
        {
          name: "Programming",
          path: "/programming",
          props: {
            urlp: "programming",
          },
          component: () => import("@/views/pages/Programming"),
        },
        {
          name: "Reverse engineering",
          path: "/reverse",
          component: () => import("@/views/pages/Reverse"),
        },
        {
          name: "Web exploitation",
          path: "/web",
          props: {
            urlp: "web",
          },
          component: () => import("@/views/pages/Web"),
        },
        {
          name: "Scoreboard",
          path: "/scoreboard",
          component: () => import("@/views/pages/Scoreboard"),
        },
      ],
    },
  ],
});
