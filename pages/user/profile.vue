<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-tabs v-model="activeTab" hide-slider>
          <v-tab v-for="tab in $t('profileTab.menu')" :key="tab.title">
            <v-icon left v-text="tab.icon" />
            <span class="ml-2" v-text="tab.title" />
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="activeTab">
          <v-tab-item v-for="comp in comps" :key="comp">
            <component :is="comp"></component>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    general: () => import("~/layouts/user/profile/general"),
    team: () => import("~/layouts/user/profile/team"),
  },
  middleware: ["auth"],
  async asyncData(context) {
    await Promise.all([context.store.dispatch("user/getProfile", context)])
  },
  data: () => ({
    activeTab: null,
    comps: ["general", "team"],
  }),
  head() {
    return {
      title: this.$auth.user.username,
    }
  },
}
</script>
