<template>
  <v-container fluid class="challenges font-exo">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
        <today-top-player />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
        <coming-competition />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs v-model="activeTab" grow>
          <v-tab v-for="tab in $t('challengesTab.menu')" :key="tab.title">
            <v-icon left v-text="tab.icon" />
            <span v-text="tab.title" />
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="6">
        <v-tabs-items v-if="!loading" v-model="activeTab">
          <v-tab-item v-for="category in categories" :key="category">
            <challenges-category
              :panel="activeTab"
              :category="category"
              @switch="updateChall"
            />
          </v-tab-item>
        </v-tabs-items>
        <template v-else>
          <v-skeleton-loader type="list-item-three-line" />
        </template>
      </v-col>
      <v-col cols="6">
        <challenges-detail :chall="challenge" @solved="updateSolved" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  async asyncData(context) {
    await Promise.all([
      context.store.dispatch("challenge/updateChallenges", context),
      context.store.dispatch("challenge/updateChallengesSolves", context),
    ])
  },
  data: () => ({
    loading: false,
    challenge: false,
  }),
  // async fetch() {
  //   await this.$store.dispatch("challenge/updateChallenges")
  //   await this.$store.dispatch("challenge/updateChallengesSolves")
  //   this.loading = false
  // },
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.challenges.title,
    }
  },
  computed: {
    ...mapGetters({
      categories: "challenge/getCategories",
    }),
    activeTab: {
      set(tab) {
        this.$store.commit("challenge/SET_TAB", tab)
      },
      get() {
        return this.$store.state.challenge.tab
      },
    },
  },
  methods: {
    updateChall(chall) {
      this.challenge = chall
    },
    updateSolved() {
      this.challenge.solved = true
    },
  },
}
</script>
