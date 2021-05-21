<template>
  <v-card class="user-bg font-exo" tile>
    <v-tabs>
      <v-tab v-for="tab in $t('admin.challengeEditTab')" :key="tab.name">
        <span v-text="tab" />
      </v-tab>
      <v-tab-item v-for="comp in compNames" :key="comp">
        <component :is="comp" />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  components: {
    general: () => import("./challenge/general"),
    hints: () => import("./challenge/hints"),
    flags: () => import("./challenge/flags"),
    tags: () => import("./challenge/tags"),
  },
  data: () => ({
    compNames: ["general", "hints", "flags", "tags"],
  }),
};
</script>
