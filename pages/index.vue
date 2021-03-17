<template>
  <v-container>
    <v-row class="font-monts" justify="center">
      <v-col cols="11" align="center" class="f-19">
        <div>
          <v-img src="/logo.png" width="100" height="100" />
          <h2
            style="letter-spacing: 0.3px"
            class="font-press"
            v-text="competition.name"
          />
          <span class="f-25 yellow--text">DEMO VERSION</span>
        </div>
        <div class="mt-5 text-justify">
          <h2 style="letter-spacing: 0.3px" class="font-press f-15">
            [ Тухай ]
          </h2>
          <p style="line-height: 200%" v-text="competition.description" />
        </div>
        <div class="mt-10 text-justify">
          <h2 style="letter-spacing: 0.3px" class="font-press f-15">
            [ Ивээн тэтгэгч ]
          </h2>
          <ul style="list-style-type: none" class="mt-3 text-justify">
            <li>
              <v-avatar>
                <img src="oyutech.png" />
              </v-avatar>
              <span class="font-weight-bold">OyuTech</span>
            </li>
          </ul>
        </div>
        <div class="mt-10 text-justify">
          <h2 style="letter-spacing: 0.3px" class="font-press f-15">
            [ Бидэнтэй нэгдээрэй ]
          </h2>
          <div class="mt-5 ml-5">
            <v-btn
              v-for="link in links"
              :key="link.icon"
              icon
              class="ml-4"
              :href="link.url"
              target="_blank"
            >
              <v-icon size="40" color="white" v-text="link.icon"></v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex"

export default {
  data: () => ({
    links: [
      {
        icon: "mdi-facebook",
        url: "https://facebook.com/oyusec/",
      },
      {
        icon: "mdi-github",
        url: "https://github.com/oyusec/",
      },
      {
        icon: "mdi-discord",
        url: "https://discord.gg/9fqVFEBAhv",
      },
      {
        icon: "mdi-twitter",
        url: "https://twitter.com/oyusec",
      },
    ],
    prizes: [
      {
        icon: "mdi-trophy",
        color: "amber",
        value: "$XXX",
      },
      {
        icon: "mdi-trophy",
        color: "blue-grey lighten-2",
        value: "$YYY",
      },
      {
        icon: "mdi-trophy",
        color: "brown lighten-1",
        value: "$ZZZ",
      },
    ],
  }),
  head() {
    return {
      title: "Нүүр хуудас",
    }
  },
  computed: {
    ...mapState({
      competition: (state) => state.competition,
    }),
  },
}
</script>
