<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" align="center" class="mb-10">
        <v-img
          id="logo"
          src="logo.png"
          width="100"
          height="100"
          alt="oyusec logo"
        />
        <client-only placeholder="loading...">
          <vue-typer
            class="font-press"
            :text="$t('pages.index.description')"
            :shuffle="true"
            :erase-delay="400"
            caret-animation="blink"
          ></vue-typer>
        </client-only>
      </v-col>
      <v-col
        v-for="app in apps"
        :key="app.name"
        cols="10"
        xs="10"
        sm="10"
        md="6"
        lg="6"
        xl="6"
        class="mt-10 text-center"
        justify="center"
      >
        <v-card
          class="bg-transparent"
          elevation="0"
          @click.native="to_(app.to)"
        >
          <v-img :src="app.img" height="225" class="zoom">
            <v-card-title class="font-exo">
              <v-row class="fill-height flex-column" justify="space-between">
                <h2 class="text-center">
                  <v-icon
                    size="35"
                    :color="app.icon.color"
                    v-text="app.icon.icon"
                  />
                  <span class="white--text" v-text="app.name" />
                </h2>
              </v-row>
            </v-card-title>
            <v-card-text>
              <span
                style="line-height: 200%"
                class="f-19 col-gray-300"
                v-text="app.description"
              />
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { VueTyper } from "vue-typer"
export default {
  components: {
    "vue-typer": VueTyper
  },
  computed: {
    apps() {
      return [
        {
          name: this.$t("competition"),
          description: this.$t("pages.index.competitionDescription"),
          to: "competitions",
          img: "competition.png",
          icon: {
            icon: this.$cs.competition.icon,
            color: this.$cs.competition.color
          }
        },
        {
          name: this.$t("challenge"),
          description: this.$t("pages.index.challengeDescription"),
          to: "challenges",
          img: "practice.png",
          icon: {
            icon: this.$cs.practice.icon,
            color: this.$cs.practice.color
          }
        },
        {
          name: this.$t("community"),
          description: this.$t("pages.index.communityDescription"),
          to: "community",
          img: "discord.png",
          icon: {
            icon: this.$cs.community.icon,
            color: this.$cs.community.color
          }
        },
        {
          name: this.$t("academy"),
          description: this.$t("pages.index.academyDescription"),
          to: "academy",
          img: "academy.png",
          icon: {
            icon: this.$cs.academy.icon,
            color: this.$cs.academy.color
          }
        }
      ]
    }
  },
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.index.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "test index page"
        }
      ]
    }
  },
  methods: {
    to_(to) {
      if (to === "community") {
        window.open("https://discord.gg/9fqVFEBAhv", "_blank")
      } else {
        this.$router.push(`/${to}`)
      }
    }
  }
}
</script>

<style>
.vue-typer .custom.char.typed {
  color: #fff;
  font-size: 25px;
}
.vue-typer .custom.char.selected {
  background-color: #fff;
  font-size: 25px;
}
.vue-typer .custom.caret {
  padding-top: 11px;
  width: 10px;
  background-color: #fff;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.zoom {
  -webkit-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}
.zoom:hover {
  -webkit-transform: rotate(3deg) scale(1.05);
  transform: rotate(3deg) scale(1.05);
  cursor: pointer;
}
</style>
