<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-tabs class="font-exo">
          <v-tab v-for="tab in $t('competition.menu')" :key="tab">
            <span class="font-weight-bold" v-text="tab" />
          </v-tab>
          <v-tab-item class="bg-transparent">
            <v-row>
              <v-col v-if="liveComps.length === 0" align="center" class="mt-5">
                <h3>
                  {{ $t("competition_notfound") }}
                  <v-icon color="white">mdi-emoticon-sad-outline</v-icon>
                </h3>
              </v-col>
              <v-col v-for="comp in liveComps" v-else :key="comp.id" cols="3">
                <Live :competition="comp" />
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item class="bg-transparent">
            <v-row>
              <v-col
                v-if="comingComps.length === 0"
                align="center"
                class="mt-5"
              >
                <h3>
                  {{ $t("competition_notfound") }}
                  <v-icon color="white">mdi-emoticon-sad-outline</v-icon>
                </h3>
              </v-col>
              <v-col v-for="comp in comingComps" v-else :key="comp.id" cols="3">
                <Coming :competition="comp" />
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item class="bg-transparent">
            <v-row>
              <v-col
                v-if="archiveComps.length === 0"
                align="center"
                class="mt-5"
              >
                <h3>
                  {{ $t("competition_notfound") }}
                  <v-icon color="white">mdi-emoticon-sad-outline</v-icon>
                </h3>
              </v-col>
              <v-col
                v-for="comp in archiveComps"
                v-else
                :key="comp.id"
                cols="3"
              >
                <Archived :competition="comp" />
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  components: {
    Live: () => import("~/components/competitions/Live"),
    Coming: () => import("~/components/competitions/Coming"),
    Archived: () => import("~/components/competitions/Archived"),
  },
  async asyncData(context) {
    await Promise.all([
      context.store.dispatch("competition/updateCompetitions", context),
    ])
  },
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.competition.title,
    }
  },

  computed: {
    ...mapGetters({
      liveComps: "competition/getLive",
      comingComps: "competition/getComing",
      archiveComps: "competition/getArchive",
    }),
  },
}
</script>
