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
            ($auth.loggedIn && chall.author === $auth.user.username)
        }"
      >
        <span v-text="chall.name" />
        <template #actions>
          <v-icon color="white">mdi-chevron-left-circle-outline</v-icon>
        </template>
      </v-expansion-panel-header>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    },
    panel: {
      required: true
    }
  },
  data: () => ({
    activePanel: null
  }),
  computed: {
    challenges() {
      return this.$store.getters["challenge/getChallenges"](this.category)
    }
  },
  watch: {
    panel(a, b) {
      this.activePanel = []
    }
  }
}
// &:hover
// .v-expansion-panels .v-expansion-panel-header--active
//   .v-icon
//     color: $blue-base !important
// .solved
//   border-left: 3px solid $neon
</script>

<style lang="sass" scoped>
@import "~vuetify/src/styles/styles.sass"

.v-expansion-panel-header
  &:hover, &--active
    border-left: 3px solid map-get($blue, base) !important
.v-expansion-panels .v-expansion-panel-header--active
  .v-icon
    color: map-get($blue, base) !important
.solved
  border-left: 3px solid map-get($blue, base)
</style>
