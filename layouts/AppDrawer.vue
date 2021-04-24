<template>
  <v-navigation-drawer
    mobile-breakpoint="960"
    :mini-variant="drawer"
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
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <!-- <div v-if="$auth.loggedIn">
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon color="red">mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="$t('drawer.loggedMenu.title')" />
          </v-list-item-content>
        </v-list-item>
      </div> -->
      <template v-if="!$auth.loggedIn">
        <v-list-item
          v-for="auth in $t('drawer.authMenu')"
          :key="auth.icon"
          :to="auth.link"
          exact
        >
          <v-list-item-icon>
            <v-icon :color="auth.color" v-text="auth.icon" />
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
      }
    }
  }
}
</script>
