<template>
  <v-navigation-drawer
    mobile-breakpoint="960"
    :mini-variant="drawer"
    enable-resize-watcher
    app
    floating
    :permanent="drawer"
    class="font-exo"
    width="200"
  >
    <v-layout column fill-height>
      <v-list nav class="py-2">
        <v-list-item
          v-for="item in $t('drawer.leftMenu')"
          :key="item.icon"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon :color="item.color" v-text="item.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer />
      <v-list nav dense class="py-2">
        <v-list-item
          v-for="_ in socials"
          :key="_.link"
          :href="_.link"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon color="grey lighten-2" v-text="_.icon" />
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(payload) {
        this.$store.commit("SET_DRAWER", payload);
      },
    },
  },
  data: () => ({
    socials: [
      {
        link: "https://facebook.com/OyuSec/",
        icon: "mdi-facebook",
      },
      {
        link: "https://discord.gg/9fqVFEBAhv/",
        icon: "mdi-discord",
      },
      {
        link: "https://instagram.com/oyutech/",
        icon: "mdi-instagram",
      },
    ],
  }),
};
</script>
