<template>
  <v-row>
    <v-col cols="12">
      <v-tabs>
        <v-tab v-for="tab in $t('competitionTab.menu')" :key="tab.title">
          <v-icon left v-text="tab.icon" />
          <span v-text="tab.title" />
        </v-tab>
        <v-tab-item v-for="component in components" :key="component.title">
          <v-row>
            <v-col v-if="component.length === 0" align="center" class="mt-5">
              <h3 v-text="$t('noCompetitionFound')" />
            </v-col>
            <v-col
              v-for="comp in component.data"
              :key="comp.id"
              cols="12"
              xs="6"
              sm="4"
              md="4"
              lg="3"
              xl="3"
            >
              <component :is="component.title" :competition="comp" />
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      components: "competition/getComponents",
    }),
  },
  mounted() {
    this.$store.dispatch("competition/updateCompetitions");
  },
};
</script>

<style></style>
