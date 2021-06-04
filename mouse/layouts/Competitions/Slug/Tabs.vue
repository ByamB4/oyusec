<template>
  <v-card-text class="px-0">
    <v-tabs>
      <v-tab v-for="tab in $t('competitionTab.slugMenu')" :key="tab.title">
        <v-icon v-text="tab.icon" />
        <span class="ml-3" v-text="tab.title" />
      </v-tab>
      <v-tab-item v-for="_ in tabs" :key="_">
        <component :is="_" />
      </v-tab-item>
    </v-tabs>
  </v-card-text>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      "CompetitionsSlugDetail",
      "CompetitionsSlugChallenges",
      "CompetitionsSlugScoreboard",
      "CompetitionsSlugStatistic",
    ],
  }),
};
</script>

<style></style>
