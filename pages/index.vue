<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" align="center" class="mb-10">
        <v-img
          id="logo"
          src="/logo.png"
          width="100"
          height="100"
          alt="oyusec logo"
        />
        <vue-typer
          class="font-press"
          :text="$t('pages.index.description')"
          :shuffle="true"
          :erase-delay="400"
          caret-animation="blink"
        ></vue-typer>
      </v-col>
      <v-col
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
          @click.native="to_('competitions')"
        >
          <v-img src="/competition.png" height="225" class="zoom">
            <v-card-title class="font-exo">
              <v-row class="fill-height flex-column" justify="space-between">
                <h2 class="text-center">
                  <v-icon
                    size="35"
                    :color="$cs.competition.color"
                    v-text="$cs.competition.icon"
                  />
                  <span class="white--text" v-text="$t('competition')" />
                </h2>
              </v-row>
            </v-card-title>
            <v-card-text>
              <span
                style="line-height: 200%"
                class="f-19 col-gray-300"
                v-text="$t('pages.index.competitionDescription')"
              />
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
      <v-col
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
          @click.native="to_('challenges')"
        >
          <v-img src="/practice.png" height="225" class="zoom">
            <v-card-title class="font-exo">
              <v-row class="fill-height flex-column" justify="space-between">
                <h2 class="text-center">
                  <v-icon
                    size="35"
                    :color="$cs.practice.color"
                    v-text="$cs.practice.icon"
                  />
                  <span class="white--text" v-text="$t('challenge')" />
                </h2>
              </v-row>
            </v-card-title>
            <v-card-text>
              <span
                style="line-height: 200%"
                class="f-19 col-gray-300"
                v-text="$t('pages.index.challengeDescription')"
              />
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
      <v-col
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
          target="_blank"
          href="https://discord.gg/9fqVFEBAhv"
        >
          <v-img src="/discord.png" height="225" class="zoom">
            <v-card-title class="font-exo">
              <v-row class="fill-height flex-column" justify="space-between">
                <h2 class="text-center">
                  <v-icon
                    size="35"
                    :color="$cs.community.color"
                    v-text="$cs.community.icon"
                  />
                  <span class="white--text" v-text="$t('community')" />
                </h2>
              </v-row>
            </v-card-title>
            <v-card-text>
              <span
                style="line-height: 200%"
                class="f-19 col-gray-300"
                v-text="$t('pages.index.communityDescription')"
              />
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
      <v-col
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
          @click.native="to_('academy')"
        >
          <v-img src="/academy.png" height="225" class="zoom">
            <v-card-title class="font-exo">
              <v-row class="fill-height flex-column" justify="space-between">
                <h2 class="text-center">
                  <v-icon
                    size="35"
                    :color="$cs.academy.color"
                    v-text="$cs.academy.icon"
                  />
                  <span class="white--text" v-text="$t('academy')" />
                </h2>
              </v-row>
            </v-card-title>
            <v-card-text>
              <span
                style="line-height: 200%"
                class="f-19 col-gray-300"
                v-text="$t('pages.index.academyDescription')"
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
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.index.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Бодлого: Мэдээллийн аюулгүй байдал, сүлжээний бодлогууд дээр өөрийн ур чадварыг шалган оноо цуглуулан бусадтай хөгжөөнт байдлаар бусадтайгаа өрсөлдөх"
        }
      ]
    }
  },
  methods: {
    to_(to) {
      this.$router.push(`/${to}`)
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
