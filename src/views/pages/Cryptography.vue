<template lang="">
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <template v-if="noChalls">
          <div class="text-center">
            <v-icon size="50">{{ mdiEmoticonSadOutline }}</v-icon>
            <span class="font-roboto font-weight-bold f-20"
              >No challenges found</span
            >
          </div>
        </template>
        <div v-if="loading">
          <v-skeleton-loader
            v-for="ind in 5"
            :key="ind"
            type="list-item-avatar"
            class="mt-3"
            transition
          ></v-skeleton-loader>
        </div>
        <div v-if="challs">
          <v-expansion-panels tile>
            <v-expansion-panel
              class="mt-1"
              v-for="(cll, index) in challs"
              :key="cll.id"
            >
              <v-expansion-panel-header
                @click="toggleActive(cll.id)"
                expand-icon
                color="#062a4e"
              >
                <template>
                  <v-row align="center" no-gutters>
                    <v-col
                      xs="6"
                      sm="6"
                      md="6"
                      lg="6"
                      xl="8"
                      class="f-15 font-weight-bold font-monts"
                    >
                      <v-icon
                        size="22"
                        v-if="
                          cll.status == 'unsolved' &&
                            cll.author != user.username
                        "
                        >{{ mdiShieldStarOutline }}</v-icon
                      >
                      <v-icon
                        size="22"
                        v-if="
                          cll.status == 'solved' || cll.author == user.username
                        "
                        >{{ mdiShieldStar }}</v-icon
                      >
                      <span class="ml-3">{{ cll.tit }}</span>
                    </v-col>
                    <v-col
                      class="text-right"
                      xs="6"
                      sm="6"
                      md="6"
                      lg="6"
                      xl="4"
                    >
                      <v-chip small class="ml-1" color="primary">
                        <span class="font-weight-bold"
                          >Solves {{ cll.sol_count }}</span
                        >
                      </v-chip>
                      <v-chip small class="ml-1" color="success">
                        <span class="font-weight-bold">Pts {{ cll.val }}</span>
                      </v-chip>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="mb-n3">
                <div class="mt-5 challenge">
                  <Editor mode="viewer" v-model="cll.desc" />
                </div>
                <div>Flag: {{ cll.flag }}</div>
                <template
                  v-if="
                    cll.author != user.username &&
                      cll.status == 'unsolved' &&
                      isLogged
                  "
                >
                  <div>
                    <v-form @submit.prevent="checkFlag(index)" class="mt-4">
                      <v-row>
                        <v-col xs="6" sm="8" md="10" lg="10" xl="11">
                          <v-text-field
                            placeholder="Enter your flag"
                            :loading="submitLoading"
                            v-model="flag"
                            autofocus
                            dense
                            trim
                          ></v-text-field>
                        </v-col>
                        <v-col xs="6" sm="4" md="2" lg="2" xl="1">
                          <v-btn
                            type="submit"
                            depressed
                            small
                            color="primary"
                            :loading="submitLoading"
                          >
                            Submit
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </div>
                </template>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>

      <div class="text-center">
        <v-snackbar v-model="snackbar" color="red" timeout="5000" bottom>
          <v-icon size="25">{{ statusIcon }}</v-icon>
          <span class="f-17 ml-3">{{ statusText }}</span>

          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
import { REMOTE } from "@/store/variables";
import { Editor } from "vuetify-markdown-editor";
import "vuetify-markdown-editor/dist/vuetify-markdown-editor.css";
import {
  mdiEmoticonSadOutline,
  mdiShieldStarOutline,
  mdiShieldStar,
  mdiFire,
} from "@mdi/js";

export default {
  name: "Cryptography",

  components: {
    Editor,
  },
  data() {
    return {
      submitLoading: false,
      mdiEmoticonSadOutline: mdiEmoticonSadOutline,
      mdiShieldStarOutline: mdiShieldStarOutline,
      mdiShieldStar: mdiShieldStar,
      loading: true,
      noChalls: false,
      id: "",
      flag: "",
      challs: [],
      snackbar: false,
      statusText: "",
      statusIcon: "",
      url: REMOTE + "/ctf/cryptography/",
      header: {
        Authorization: "JWT " + this.$store.state.token,
      },
    };
  },

  computed: {
    ...mapState(["user"]),
    ...mapState(["isLogged"]),
  },

  async created() {
    if (this.$store.state.isLogged) {
      axios
        .get(this.url, {
          headers: this.header,
        })
        .then(
          (resp) => {
            this.challs = resp.data;
            this.loading = false;
            if (this.challs.length === 0) {
              this.noChalls = true;
            }
          },
          (error) => {
            console.log(error);
            if (error.response.status == 401) {
              this.$store.commit("logoutUser");
            }
          }
        );
    } else {
      axios.get(this.url).then((resp) => {
        console.log(resp.data);
        this.challs = resp.data;
        this.loading = false;
        if (this.challs.length === 0) {
          this.noChalls = true;
        }
      });
    }
  },

  methods: {
    async checkFlag(chall) {
      this.submitLoading = true;
      axios
        .post(
          this.url,
          {
            id: this.id,
            flag: this.flag,
          },
          { headers: this.header }
        )
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.result == "correct") {
            this.statusText = "Correct flag";
            this.statusIcon = mdiFire;
            this.challs[chall]["status"] = "solved";
            this.syncProfile();
          } else {
            this.statusText = "Incorrect flag";
            this.statusIcon = mdiEmoticonSadOutline;
          }
          this.snackbar = true;
          this.submitLoading = false;
        });
    },

    async syncProfile() {
      axios
        .get(`${REMOTE}/profile/${this.$store.state.user.slug}`)
        .then((resp) => {
          this.$store.commit("setProfile", resp.data);
        });
    },

    toggleActive(id) {
      this.flag = "";
      this.id = id;
    },
  },
};
</script>
<style lang="scss">
a {
  text-decoration: none;
}
.v-expansion-panel-header {
  height: 10px !important;
}
.v-expansion-panel-header:hover {
  background-color: #083766 !important;
}
</style>
