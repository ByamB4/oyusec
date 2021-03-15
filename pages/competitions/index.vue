<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-tabs>
          <v-tab v-for="tab in tabs" :key="tab">
            <span v-text="tab" />
          </v-tab>
          <v-tab-item class="bg-transparent">
            <v-row>
              <v-col v-for="comp in liveComps" :key="comp.id" cols="3">
                <Live :competition="comp" />
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item class="bg-transparent">
            <v-row>
              <v-col v-for="comp in upcomingComps" :key="comp.id" cols="3">
                <Coming :competition="comp" />
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item class="bg-transparent">
            <v-row>
              <v-col v-for="comp in upcomingComps" :key="comp.id" cols="3">
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

import Live from "~/components/competitions/Live"
import Coming from "~/components/competitions/Coming"
import Archived from "~/components/competitions/Archived"

export default {
  components: { Live, Coming, Archived },
  async asyncData(context) {
    await Promise.all([
      context.store.dispatch("competitions/updateCompetition", context),
    ])
  },

  data: () => ({
    tabs: ["Шууд", "Удахгүй", "Дууссан"],
  }),

  head: () => ({
    title: "Тэмцээн",
  }),

  computed: {
    ...mapGetters({
      liveComps: "competitions/getLive",
      upcomingComps: "competitions/getUpcoming",
      archiveComps: "competitions/getArchive",
    }),
  },
}
</script>
