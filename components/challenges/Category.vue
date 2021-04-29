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
  &--light
    .v-expansion-panels
      .v-expansion-panel-header
        &--active
          border-left: 4px solid $light-tab !important
          .v-icon
            color: $light-tab !important
        &:not(&--active):hover
          border-left: 3px solid $light-tab-light !important
          .v-icon
            color: $light-tab-light !important
    .solved
      border-left: 3px solid $light-tab !important
  &--dark
    .v-expansion-panels
      margin: 0 24px
      .v-expansion-panel-header
        &--active
          border-left: 4px solid $dark-tab !important
          .v-icon
            color: $dark-tab !important
        &:not(&--active):hover
          border-left: 3px solid $dark-tab-light !important
          .v-icon
            color: $dark-tab-light !important
            height: 10px !important
            background-color: #062a4e
        &:hover, &--active
          background-color: #083766
    .solved
      border-left: 3px solid $dark-tab-light !important
</style>
