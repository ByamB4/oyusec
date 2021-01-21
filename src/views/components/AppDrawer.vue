<template>
  <v-navigation-drawer
    v-model="drawer"
    :expand-on-hover="expandOnHover"
    mobile-breakpoint="960"
    width="240"
    app
    floating
    class="font-press bg-dark"
  >
    <v-sheet class="bg-dark">
      <template v-if="isLogged">
        <v-row align="center">
          <v-col class="ml-3 mt-4" cols="4">
            <v-avatar size="72">
              <v-img :src="user.photo" key="webpages:Enabled"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="mt-4" cols="6">
            <v-icon size="35" v-text="mdiShieldStar"></v-icon>
            <span v-text="profile.score"></span>
          </v-col>
        </v-row>
      </template>
      <template v-if="!isLogged">
        <v-row>
          <v-col class="mt-4" cols="12">
            <v-icon
              size="40"
              class="ml-4 mt-n2"
              v-text="mdiShieldStar"
            ></v-icon>
            <span class="ml-5" v-text="this.$store.state.appname"></span>
          </v-col>
        </v-row>
      </template>
    </v-sheet>
    <v-list dark flat rounded>
      <v-list-item
        v-for="[icon, color, text, lnk] in links"
        :key="icon"
        :to="lnk"
        exact
      >
        <v-list-item-icon>
          <v-icon :color="color" v-text="icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            class="f-11 font-weight-bold"
            v-text="text"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <template v-if="!isLogged">
        <g-signin-button
          :params="this.$store.state.googleSignInParams"
          @success="googleSuccess"
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="orange darken-2" v-text="mdiGoogle"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="f-12 font-weight-medium"
                >Log In</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </g-signin-button>
      </template>
      <template v-if="isLogged">
        <v-list-item @click="logOut">
          <v-list-item-icon>
            <v-icon color="red">{{ mdiLogin }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="f-12 font-weight-medium"
              >Log out</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { REMOTE } from "@/store/variables";

import {
  mdiLockOpen,
  mdiFileCog,
  mdiEye,
  mdiSkullScan,
  mdiShieldBugOutline,
  mdiRobot,
  mdiWeb,
  mdiChartHistogram,
  mdiLogin,
  mdiGoogle,
  mdiShieldStar,
} from "@mdi/js";

export default {
  name: "AppDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    mdiLogin: mdiLogin,
    mdiGoogle: mdiGoogle,
    mdiShieldStar: mdiShieldStar,
    links: [
      [mdiLockOpen, "light-blue darken-2", "Crypto", "/crypto"],
      [mdiFileCog, "lime darken-3", "Forensics", "/forensics"],
      [mdiEye, "purple darken-3", "Misc", "/misc"],
      [mdiSkullScan, "grey darken-1", "Pwn", "/pwn"],
      [mdiShieldBugOutline, "pink accent-2", "Reverse", "/reverse"],
      [mdiRobot, "cyan darken-1", "Programming", "/programming"],
      [mdiWeb, "green darken-2", "Web", "/web"],
      [mdiChartHistogram, "yellow darken-2", "Scoreboard", "/scoreboard"],
    ],
  }),

  computed: {
    ...mapState(["user"]),
    ...mapState(["profile"]),
    ...mapState(["isLogged"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },

  methods: {
    async googleSuccess(resp) {
      axios
        .post(`${REMOTE}/auth/`, {
          access_token: resp.getAuthResponse(true).access_token,
        })
        .then((resp) => {
          this.$store.commit("SET_USER", resp.data);
          this.syncProfile();
        });
    },
    async syncProfile() {
      const resp = await axios.get(
        `${REMOTE}/profile/${this.$store.state.user.slug}`
      );
      this.$store.commit("SET_PROFILE", resp.data);
    },
    logOut() {
      this.$store.commit("REMOTE_USER");
    },
  },
};
</script>
