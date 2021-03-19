<template>
  <v-app-bar app height="50" elevation="0">
    <v-app-bar-nav-icon @click="$store.commit('TOGGLE_DRAWER')">
      <v-icon color="white">mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    <v-spacer />
    <client-only>
      <template v-if="$auth.loggedIn">
        <template v-if="$auth.user.type === 'admin'">
          <v-btn
            v-for="link in $t('topBar.adminMenu')"
            :key="link.title"
            :color="link.color"
            :to="localePath(link.to)"
            small
            text
          >
            <v-icon left>
              {{ link.icon }}
            </v-icon>
            <span v-text="link.title" />
          </v-btn>
        </template>
        <v-tooltip v-if="$auth.user.type !== 'admin'" bottom>
          <template #activator="{ on, attrs }">
            <v-progress-linear
              :value="profile.progress"
              height="10"
              width="200"
              color="amber darken-1"
              background-opacity="0.2"
              rounded
              v-bind="attrs"
              v-on="on"
            ></v-progress-linear>
          </template>
          <span>{{ profile.progress }}%</span>
        </v-tooltip>
        <v-btn
          icon
          color="light-blue darken-1"
          type="button"
          role="button"
          :to="
            localePath({ name: 'user-slug', params: { slug: $auth.user.slug } })
          "
        >
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
    </client-only>

    <!-- Dirty code will update later -->
    <div class="mr-3">
      <v-btn
        v-if="$i18n.locale === 'en'"
        type="button"
        role="button"
        text
        small
        icon
        :to="switchLocalePath('mn')"
      >
        <v-icon color="pink">mdi-translate</v-icon>
      </v-btn>
      <v-btn v-else text small icon :to="switchLocalePath('en')">
        <v-icon color="pink">mdi-translate-off</v-icon>
      </v-btn>
    </div>
    <div>
      <v-btn
        v-if="$vuetify.theme.dark"
        type="button"
        role="button"
        text
        small
        icon
        color="amber darken-1"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-white-balance-sunny</v-icon>
      </v-btn>
      <v-btn
        v-else
        type="button"
        role="button"
        text
        small
        icon
        color="blue-grey lighten-3"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-moon-waning-crescent</v-icon>
      </v-btn>
    </div>
    <!-- End of dirty code -->
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },

  mounted() {
    this.interval = setInterval(() => {
      if (this.$auth.loggedIn && this.$auth.user.type !== "admin") {
        this.$store.dispatch("user/getProfile", { slug: this.$auth.user.slug })
      }
    }, 10 * 1000) // 10 sec
  },
}
</script>
<style lang="sass">
.v-app-bar
  .v-progress-linear
    width: 25%
.v-btn--active:hover::before, .v-btn--active::before
  opacity: 0 !important
</style>
