<template>
  <v-row>
    <v-col cols="12">
      <v-tabs v-model="activeTab">
        <v-tab v-for="(tab, i) in $t('challengesTab.menu')" :key="tab.title">
          <v-icon left v-text="tab.icon" />
          <span v-text="tab.title" />
          <span class="ml-2" v-text="total_challs[i]" />
        </v-tab>
      </v-tabs>
    </v-col>
    <v-col cols="6">
      <v-tabs-items v-if="!loading" v-model="activeTab">
        <v-tab-item
          v-for="category in $store.state.challenge.categoryOrders"
          :key="category"
        >
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
      <challenges-detail
        v-if="viewChallenge"
        :chall="challenge"
        :can-submit="canSubmit"
        @solved="updateSolved"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    challenge: {},
    viewChallenge: false,
  }),
  computed: {
    activeTab: {
      set(tab) {
        this.$store.commit("challenge/SET_TAB", tab);
        this.challenge = {};
        this.viewChallenge = false;
      },
      get() {
        return this.$store.state.challenge.tab;
      },
    },
    canSubmit() {
      return (
        this.$auth.loggedIn &&
        this.challenge.author !== this.$auth.user.username &&
        !this.challenge.solved
      );
    },
    total_challs() {
      const t = [];
      this.$store.state.challenge.categoryOrders.forEach((cat) =>
        t.push(
          this.$store.state.challenge.challenges.filter(
            (chall) => chall.category === cat
          ).length
        )
      );
      return t;
    },
  },
  methods: {
    updateChall(chall) {
      if (chall === this.challenge) {
        this.challenge = {};
        this.viewChallenge = false;
      } else {
        this.challenge = chall;
        this.viewChallenge = true;
      }
    },
    updateSolved() {
      this.challenge.solved = true;
    },
  },
};
</script>

<style></style>
