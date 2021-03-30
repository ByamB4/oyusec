<template>
  <v-navigation-drawer
    v-model="drawer"
    mobile-breakpoint="960"
    width="240"
    enable-resize-watcher
    app
    floating
    class="font-press"
  >
    <nuxt-link :to="localePath('/')" aria-label="homepage">
      <div class="mt-2 d-flex align-center">
        <v-avatar tile size="45" class="ml-4">
          <v-img src="/logo.png" />
        </v-avatar>
        <div class="ml-5">
          <span class="white--text">OyuSec</span>
        </div>
      </div>
    </nuxt-link>
    <v-list flat rounded>
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
          <v-list-item-title
            class="f-12 white--text"
            v-text="item.title"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <div v-if="$auth.loggedIn">
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon color="red">mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="f-12 white--text">{{
              $t("drawer.loggedMenu.title")
            }}</v-list-item-title>
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
            <v-list-item-title
              class="f-12 white--text"
              v-text="auth.name"
            ></v-list-item-title>
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
      this.$store.dispatch("competition/updateSolved")
      this.$store.dispatch("challenge/updateSolved")
      // this.$store.commit('SET_USER', {})
      // this.$store.commit('SET_ISLOGGED', false)
      // this.$store.commit('SET_TOKEN', { access: null, refresh: null })
    },
  },
}
</script>
