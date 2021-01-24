<template>
  <div>
    <v-container class="pa-5 mt-5 profile">
      <v-row justify="center">
        <v-col md="5">
          <v-sheet rounded class="bg-dark-1">
            <v-row class="mx-3 ">
              <v-col cols="4">
                <v-avatar size="120">
                  <v-img
                    :src="user.photo"
                    key="webpages:Enabled"
                    alt="Profile image"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="8">
                <h2 class="mt-3 ">Byambadalai Sumiya</h2>
                <h3 class="mt-1 text--secondary">ByamB4</h3>
                <h4 class="mt-1 text--disabled">Level: 15</h4>
              </v-col>
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12">
                <v-tooltip bottom v-for="(item, index) in trophy" :key="index">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      size="42"
                      :color="item.color"
                      >{{ item.icon }}</v-icon
                    >
                  </template>
                  <span>{{ item.color }}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-col cols="12" v-bind="attrs" v-on="on">
                    <v-avatar
                      class="mr-2 mt-1"
                      color="grey darken-1"
                      size="38"
                      v-for="item in 10"
                      :key="item"
                    >
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                      >
                      </v-img>
                    </v-avatar>
                  </v-col>
                </template>
                <span>Дагагчид</span>
              </v-tooltip>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col md="7">
          <v-sheet elevation="5" rounded>
            <Challs />
          </v-sheet>
          <v-sheet elevation="5" rounded class="mt-5">
            <Rating />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Challs from "./Challs";
import Rating from "./Rating";
import { mdiTrophy } from "@mdi/js";
import { mapState } from "vuex";

export default {
  data: () => ({
    trophy: [
      {
        icon: mdiTrophy,
        color: "amber",
        desc: "test",
      },
      {
        icon: mdiTrophy,
        color: "blue-grey lighten-3",
      },
    ],
  }),

  computed: {
    ...mapState(["drawer"]),
    ...mapState(["isLogged"]),
    ...mapState(["user"]),
    ...mapState(["profile"]),
  },

  components: {
    Challs,
    Rating,
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cabin&display=swap");
.profile {
  font-family: "Cabin", sans-serif;
}
</style>
