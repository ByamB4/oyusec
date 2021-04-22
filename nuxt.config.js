export default {
  // target: "static",
  head: {
    titleTemplate: "%s",
    title: "OyuSec",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Мэдээллийн аюулгүй байдлын талаарх үнэн зөв, бодитой ойлголт, мэдлэг, ур чадварыг нийтэд сургах, таниулах"
      },
      // TODO temporary

      {
        name: "keywords",
        content:
          "oyusec, ctf, byamb4, монгол, writeup, oyutech, oyutube, oyulearn, mongolian, os"
      },
      {
        name: "author",
        content: "Byambadalai Sumiya"
      },
      {
        name: "copyright",
        content: "Byambadalai Sumiya"
      },
      {
        name: "creator",
        content: "Byambadalai Sumiya"
      },
      {
        name: "publisher",
        content: "Byambadalai Sumiya"
      },
      {
        name: "theme-color",
        content: "#0c1221"
      },
      {
        name: "robots",
        content: "index, follow"
      },
      {
        name: "og:title",
        content: "OyuSec"
      },
      {
        name: "og:type",
        content: "website"
      },
      {
        name: "og:description",
        content:
          "Мэдээллийн аюулгүй байдлын талаарх үнэн зөв, бодитой ойлголт, мэдлэг, ур чадварыг нийтэд таниулцах"
      },
      {
        name: "og:image",
        content: "/logo.png"
      },
      {
        name: "og:url",
        content: "https://oyusec.ml"
      },
      {
        name: "article:author",
        content: "https://facebook.com/byamb4"
      },
      {
        name: "article:section",
        content: "OyuSec"
      },
      {
        name: "article:publisher",
        content: "https://facebook.com/oyusec"
      },
      {
        name: "twitter:title",
        content: "OyuSec"
      },
      {
        name: "twitter:site",
        content: "@byamb4"
      },
      {
        name: "twitter:creator",
        content: "@byamb4"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }]
  },
  // loading: false,
  loading: {
    color: "#b388ff",
    height: "1px",
    continuous: true,
    duration: 2000
  },
  css: [
    "~/assets/global.sass",
    "~/assets/class.sass",
    "~/assets/theme.sass",
    "~/assets/sass/challenges.sass",
    {
      src: "~/node_modules/highlight.js/styles/monokai-sublime.css",
      lang: "css"
    }
  ],
  i18n: {
    lazy: true,
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en-US.js"
      },
      {
        name: "Mongolia",
        code: "mn",
        iso: "mn-MN",
        file: "mn-MN.js"
      }
    ],
    langDir: "~/locales/",
    defaultLocale: "mn",
    fallbackLocale: "mn",
    strategy: "no_prefix"
  },
  plugins: ["~/plugins/consts", "~/plugins/methods"],
  components: true,
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/vuetify"],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast",
    "@nuxtjs/markdownit",
    "nuxt-webfontloader",
    "nuxt-i18n"
  ],

  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "access",
          maxAge: 60 * 60 * 24
        },
        refreshToken: {
          property: "refresh",
          data: "refresh",
          maxAge: 60 * 60 * 24 * 5
        },
        user: {
          property: "user",
          autoFetch: true
        },
        endpoints: {
          login: {
            url: "/api/auth/login/",
            method: "post",
            propertyName: "access",
            altProperty: "refresh"
          },
          logout: {
            url: "/api/auth/logout/",
            method: "get"
          },
          register: {
            url: "/api/auth/register/",
            method: "post"
          },
          user: {
            url: "/api/user/me/",
            method: "get"
          },
          refresh: {
            url: "/api/auth/refresh/",
            method: "post"
          }
        }
        // autoLogout: true,
      }
    },
    redirect: {
      home: "challenges",
      login: "auth",
      register: "auth",
      logout: ""
    },
    plugins: ["~/plugins/auth.js"]
  },

  axios: {
    // baseURL: "http://localhost:8000"
    baseURL: "https://oyusec-server.herokuapp.com"
  },
  pwa: {
    manifest: {
      lang: "en"
    }
  },
  toast: {
    theme: "bubble",
    position: "bottom-right",
    className: "font-exo",
    iconPack: "mdi",
    duration: 3000
  },
  markdownit: {
    runtime: true,
    injected: true,
    use: ["markdown-it-highlightjs"]
  },

  webfontloader: {
    google: {
      families: ["Press+Start+2P", "Montserrat", "Exo+2", "Play"],
      urls: [
        "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap",
        "https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap",
        "https://fonts.googleapis.com/css2?family=Play&display=swap"
      ]
    }
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true
    }
  },
  render: {
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000
    }
  },
  fetchOnServer: false,
  build: {},
  generate: {
    fallback: true
  }
}
