export default {
  ssr: false,
  head: {
    titleTemplate: "%s - OyuSec",
    title: "OyuSec",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "CTF сонирхогч залуучуудад зориулан бүтээв",
      },
      // Just SEO related thing, will change later

      {
        name: "keywords",
        content:
          "ctf, oyusec, byamb4, монгол, writeup, oyutech, oyutube, oyulearn, mongolian",
      },
      {
        name: "author",
        content: "Byambadalai Sumiya",
      },
      {
        name: "copyright",
        content: "Byambadalai Sumiya",
      },
      {
        name: "creator",
        content: "Byambadalai Sumiya",
      },
      {
        name: "publisher",
        content: "Byambadalai Sumiya",
      },
      {
        name: "theme-color",
        content: "#0c1221",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "og:title",
        content: "OyuSec",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:description",
        content: "CTF сонирхогч залуучуудад зориулан бүтээв",
      },
      {
        name: "og:url",
        content: "https://oyusec.ml",
      },
      {
        name: "article:author",
        content: "https://facebook.com/byamb4",
      },
      {
        name: "article:section",
        content: "OyuSec",
      },
      {
        name: "article:publisher",
        content: "https://facebook.com/oyusec",
      },
      {
        name: "twitter:title",
        content: "OyuSec",
      },
      {
        name: "twitter:site",
        content: "@byamb4",
      },
      {
        name: "twitter:creator",
        content: "@byamb4",
      },
      {
        name: "twitter:description",
        content: "CTF сонирхогч залуучуудад зориулан бүтээв",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
  },
  loading: {
    color: "#b388ff",
    height: "1px",
  },
  css: ["~/assets/global.sass", "~/assets/class.sass", "~/assets/theme.sass"],
  plugins: ["~/plugins/consts"],
  components: true,
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/vuetify"],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast",
    "@nuxtjs/markdownit",
    "nuxt-webfontloader",
    "nuxt-i18n",
  ],

  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "access",
          maxAge: 3000,
        },
        refreshToken: {
          property: "refresh",
          data: "refresh",
          maxAge: 60 * 60 * 24,
        },
        user: {
          property: "user",
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: "/api/auth/login/",
            method: "post",
            propertyName: "access",
            altProperty: "refresh",
          },
          logout: {
            url: "/api/auth/logout/",
            method: "get",
          },
          register: {
            url: "/api/auth/register/",
            method: "post",
          },
          user: {
            url: "/api/user/me/",
            method: "get",
          },
          refresh: {
            url: "/api/auth/refresh/",
            method: "post",
          },
        },
        autoLogout: true,
      },
    },
    redirect: {
      home: "challenges",
      login: "login",
      logout: "",
    },
    plugins: ["~/plugins/auth.js"],
  },

  axios: {
    // baseURL: "http://localhost:8000",
    baseURL: "https://oyusec-server.herokuapp.com",
  },
  toast: {
    theme: "bubble",
    position: "bottom-right",
    className: "font-exo",
    iconPack: "mdi",
    duration: 3000,
  },
  i18n: {
    lazy: true,
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en-US.js",
      },
      {
        name: "Mongolia",
        code: "mn",
        iso: "mn-MN",
        file: "mn-MN.js",
      },
    ],
    langDir: "~/locales/",
    defaultLocale: "mn",
    fallbackLocale: "mn",
    strategy: "prefix",
  },

  markdownit: {
    runtime: true,
  },

  webfontloader: {
    google: {
      families: ["Press+Start+2P", "Montserrat", "Exo+2", "Play"],
      urls: [
        "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap",
        "https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap",
        "https://fonts.googleapis.com/css2?family=Play&display=swap",
      ],
    },
  },
  vuetify: {
    // Default theme is dark
    theme: {
      dark: true,
    },
  },
  build: {},
  generate: {},
}
