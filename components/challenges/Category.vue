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
</script>
<style lang="sass" scoped>
.theme
  &--dark
    .solved
      border-left: 3px solid $dark-tab-light !important
</style>
