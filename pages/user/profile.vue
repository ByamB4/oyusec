<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card class="user-bg">
          <v-card-title>
            <v-row align="center">
              <v-col cols="4">
                <user-detail />
              </v-col>
              <v-divider vertical inset />
              <v-col cols="4">
                <user-social-links />
              </v-col>
              <v-divider vertical inset />
              <v-col cols="4">
                <user-type />
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text class="px-0 py-0">
            <v-tabs v-model="activeTab" hide-slider>
              <v-tab v-for="tab in $t('profileTab.menu')" :key="tab.title">
                <v-icon left v-text="tab.icon" />
                <span class="ml-2" v-text="tab.title" />
              </v-tab>
            </v-tabs>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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
import { mapGetters } from "vuex"

export default {
  components: {
    general: () => import("~/layouts/user/profile/general"),
    team: () => import("~/layouts/user/profile/team"),
    edit: () => import("~/layouts/user/profile/edit"),
  },
  middleware: ["auth"],
  async asyncData(context) {
    await Promise.all([context.store.dispatch("user/getProfile", context)])
  },
  data: () => ({
    activeTab: null,
    comps: ["general", "team", "edit"],
  }),
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },
  head() {
    return {
      title: this.profile.fullname,
    }
  },
}
</script>
