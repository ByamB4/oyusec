<template>
  <v-navigation-drawer
    mobile-breakpoint="960"
    :mini-variant="drawer"
    permanent
    enable-resize-watcher
    app
    floating
    width="200"
    class="font-exo"
  >
    <v-list nav min-height="200">
      <v-list-item
        v-for="item in $t('drawer.leftMenu')"
        :key="item.icon"
        :to="localePath(item.link)"
        exact
      >
        <v-list-item-icon>
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <div v-if="$auth.loggedIn">
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon color="red">mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="$t('drawer.loggedMenu.title')" />
          </v-list-item-content>
        </v-list-item>
      </div>
      <template v-else>
        <v-list-item
          v-for="auth in $t('drawer.authMenu')"
          :key="auth.icon"
          :to="localePath(auth.link)"
          exact
        >
          <v-list-item-icon>
            <v-icon :color="auth.color">{{ auth.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="auth.name" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(payload) {
        this.$store.commit("SET_DRAWER", payload)
      },
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      await this.$store.dispatch("competition/updateSolved")
      await this.$store.dispatch("challenge/updateSolved")
      // this.$store.commit('SET_USER', {})
      // this.$store.commit('SET_ISLOGGED', false)
      // this.$store.commit('SET_TOKEN', { access: null, refresh: null })
    },
  },
}
</script>
