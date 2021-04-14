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
        cols="12"
        xs="12"
        sm="8"
        md="8"
        lg="8"
        xl="8"
        class="mt-10 text-center"
      >
        <h2 class="text-center">
          <v-icon size="35" color="yellow darken-2">mdi-trophy-outline</v-icon>
          {{ $t("competition") }}
        </h2>
        <span
          style="line-height: 200%"
          class="f-19"
          v-text="$t('pages.index.competitionDescription')"
        />
      </v-col>
      <v-col
        cols="10"
        xs="10"
        sm="10"
        md="6"
        lg="6"
        xl="6"
        class="mt-10 text-center"
      >
        <h2 class="text-center">
          <v-icon size="35" color="cyan accent-5">mdi-flag-checkered</v-icon>
          {{ $t("challenge") }}
        </h2>

        <span
          style="line-height: 200%"
          class="f-19"
          v-text="$t('pages.index.challengeDescription')"
        />
      </v-col>
      <v-col
        cols="10"
        xs="10"
        sm="10"
        md="6"
        lg="6"
        xl="6"
        class="mt-10 text-center"
      >
        <h2 class="text-center">
          <v-icon size="35" color="light-blue accent-3"
            >mdi-account-group</v-icon
          >
          {{ $t("community") }}
        </h2>
        <span
          style="line-height: 200%"
          class="f-19"
          v-text="$t('pages.index.communityDescription')"
        />
      </v-col>
      <!-- <v-col
        cols="10"
        xs="10"
        sm="10"
        md="6"
        lg="6"
        xl="6"
        class="mt-10"
        style="color: #616161"
      >
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <h2 class="text-center">
                <v-icon size="35" color="#616161">mdi-book-open-variant</v-icon>
                {{ $t("learn") }}
              </h2>
              <span style="line-height: 200%" class="f-19 text-justify">
                Бид анхлан суралцагчдад, зориулж чиглэл өгөх зорилгоор
                <b>linux</b>, энгийн <b>ctf</b> бодлого, аюулгүй байдлын талаар
                сонирхолтой байдлаар заах болно.
              </span>
            </div>
          </template>
          <span v-text="$t('comingSoon')" />
        </v-tooltip>
      </v-col> -->
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
      // script: [
      //   {
      //     src: "https://nextparticle.nextco.de/nextparticle.min.js",
      //     hid: "stripe",
      //     defer: true,
      //   },
      // ],
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
</style>
