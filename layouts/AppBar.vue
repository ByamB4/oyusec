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
            v-for="link in admin_links"
            :key="link.title"
            :color="link.color"
            :to="link.to"
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
          :to="{ name: 'user-slug', params: { slug: $auth.user.slug } }"
        >
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
    </client-only>
    <v-btn
      icon
      color="pink"
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data: () => ({
    admin_links: [
      {
        icon: "mdi-wrench",
        title: "Тохиргоо",
        color: "red",
        to: "/admin/config",
      },
      {
        icon: "mdi-sword-cross",
        title: "Бодлогууд",
        color: "blue",
        to: "/admin/challenges",
      },
    ],
  }),

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
