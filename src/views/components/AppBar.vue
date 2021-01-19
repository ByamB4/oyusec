<template>
  <v-app-bar absolute app flat height="50" class="bg-dark">
    <v-app-bar-nav-icon @click="setDrawer(!drawer)">
      <v-icon>{{ mdiMenu }}</v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title
      v-text="$route.name"
      class="font-press f-15"
    ></v-toolbar-title>
    <v-spacer />
    <v-row align="center" justify="end">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-col
            cols="3"
            v-bind="attrs"
            v-on="on"
            class="font-roboto text-center"
          >
            <span class="amber--text">Lvl</span>
            <span class="ml-3">TODO</span>
          </v-col>
        </template>
        <span>Gonna update soon ...</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-col
            v-bind="attrs"
            v-on="on"
            cols="3"
            class="text-center font-roboto"
          >
            <span class="amber--text">Exp</span>
            <span class="ml-3">TODO</span>
          </v-col>
        </template>
        <span>Goona update soon ...</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-col cols="6">
            <v-progress-linear
              v-bind="attrs"
              v-on="on"
              value="15"
              height="10"
              color="amber darken-1"
              rounded
            ></v-progress-linear>
          </v-col>
        </template>
        <span>Goona update soon ...</span>
      </v-tooltip>
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
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>
