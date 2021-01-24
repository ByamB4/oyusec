<template>
  <v-app-bar absolute app flat height="50" class="bg-dark">
    <v-app-bar-nav-icon @click="setDrawer(!drawer)">
      <v-icon v-text="mdiMenu"></v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title
      v-text="$route.name"
      class="font-press f-15"
    ></v-toolbar-title>
    <v-spacer />
    <v-row v-if="isLogged" align="center" justify="end">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-col cols="6">
            <v-progress-linear
              v-bind="attrs"
              v-on="on"
              value="75"
              height="10"
              color="amber darken-1"
              rounded
            ></v-progress-linear>
          </v-col>
        </template>
        <span>Оноо {{ profile.score }}</span>
      </v-tooltip>

      <v-col cols="2">
        <router-link :to="{ name: 'Profile', params: { slug: user.slug } }">
          <v-avatar size="42">
            <v-img :src="user.photo" key="webpages:Enabled" />
          </v-avatar>
        </router-link>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mdiMenu } from "@mdi/js";
import { mapMutations, mapState } from "vuex";

export default {
  name: "AppBar",

  data: () => ({
    mdiMenu: mdiMenu,
  }),

  computed: {
    ...mapState(["drawer"]),
    ...mapState(["isLogged"]),
    ...mapState(["user"]),
    ...mapState(["profile"]),
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>
