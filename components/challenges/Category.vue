<template>
  <v-expansion-panels v-model="activePanel" class="mx-0" tile inset>
    <v-expansion-panel
      v-for="chall in challenges"
      :key="chall.id"
      @click="$emit('switch', chall)"
    >
      <v-expansion-panel-header
        class="user-bg"
        :class="{
          solved:
            chall.solved ||
            ($auth.loggedIn && chall.author === $auth.user.username),
        }"
        expand-icon="mdi-chevron-left-circle-outline"
      >
        <span v-text="chall.name" />
      </v-expansion-panel-header>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    activePanel: null,
  }),
  props: {
    category: {
      type: String,
      required: true,
    },
    panel: {
      required: true,
    },
  },
  watch: {
    panel(a, b) {
      this.activePanel = []
    },
  },
  computed: {
    challenges() {
      return this.$store.getters["challenge/getChallenges"](this.category)
    },
  },
}
</script>

<style lang="sass">
.v-expansion-panels .v-expansion-panel-header--active
  .v-icon
    color: #76FF03 !important
.solved
  border-left: 3px solid #76ff03
</style>
