<template lang="">
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <template v-if="noChalls">
          <div class="text-center">
            <v-icon size="50">{{ mdiEmoticonSadOutline }}</v-icon>
            <span class="font-roboto font-weight-bold f-20"
              >Бодлого олдсонгүй</span
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
          <v-expansion-panels tile popout>
            <v-expansion-panel
              class="mt-2"
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
                          >Бодсон {{ cll.sol_count }}</span
                        >
                      </v-chip>
                      <v-chip small class="ml-1" color="success">
                        <span class="font-weight-bold">Оноо {{ cll.val }}</span>
                      </v-chip>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="mb-n3">
                <div class="mt-5 challenge">
                  <Editor mode="viewer" v-model="cll.desc" />
                </div>
                <template
                  v-if="
                    cll.author != user.username &&
                      cll.status == 'unsolved' &&
                      isLogged
                  "
                >
                  <div>
                    <v-form @submit.prevent="checkFlag(index)" class="mt-4">
                      <v-row justify="center" class="font-monts f-15">
                        <v-col cols="5">
                          <v-text-field
                            placeholder="oyusec{.*}"
                            :loading="submit.statusLoading"
                            v-model="flag"
                            dense
                            autofocus
                            trim
                          ></v-text-field>
                        </v-col>
                        <v-col cols="2">
                          <v-btn
                            type="submit"
                            depressed
                            small
                            color="primary"
                            :loading="submit.statusLoading"
                          >
                            Шалгах
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </div>
                </template>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-snackbar
            v-model="snackbar"
            :color="submit.statusColor"
            timeout="2000"
          >
            <v-icon size="30" v-text="submit.statusIcon"></v-icon>
            <span class="f-17 ml-3 font-monts">{{ submit.statusText }}</span>
          </v-snackbar>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
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
      mdiEmoticonSadOutline: mdiEmoticonSadOutline,
      mdiShieldStarOutline: mdiShieldStarOutline,
      mdiShieldStar: mdiShieldStar,
      url: "ctf/cryptography/",
      loading: true,
      noChalls: false,
      id: "",
      flag: "",
      challs: [],
      snackbar: false,
      submit: {
        statusText: "",
        statusIcon: "",
        statusColor: "",
        statusLoading: false,
      },
    };
  },

  computed: {
    ...mapState(["user"]),
    ...mapState(["isLogged"]),
  },

  watch: {
    "$store.state.isLogged": function() {
      this.getChallenges();
    },
  },

  created() {
    this.$store.commit("SET_LOADING", true);
  },

  mounted() {
    this.getChallenges();
  },

  methods: {
    async getChallenges() {
      const header = this.$store.state.isLogged
        ? { Authorization: "JWT " + this.$store.state.token }
        : "";
      const resp = await this.$api.get(this.url, { headers: header });
      this.challs = resp.data;
      this.noChalls = this.challs.length === 0;
      this.loading = false;
      this.$store.commit("SET_LOADING", false);
    },

    async checkFlag(chall) {
      this.submitLoading = true;
      const resp = await this.$api.post(
        this.url,
        { id: this.id, flag: this.flag },
        { headers: { Authorization: "JWT " + this.$store.state.token } }
      );
      if (resp.data.result == "correct") {
        this.submit.statusText = "Зөв байна";
        this.submit.statusColor = "green";
        this.submit.statusIcon = mdiFire;
        this.challs[chall]["status"] = "solved";
        this.syncProfile();
      } else {
        this.submit.statusText = "Буруу байна";
        this.submit.statusColor = "red";
        this.submit.statusIcon = mdiEmoticonSadOutline;
      }
      this.snackbar = true;
      this.submit.statusLoading = false;
    },

    async syncProfile() {
      const resp = await this.$api.get(
        `profile/${this.$store.state.user.slug}`
      );
      this.$store.commit("SET_PROFILE", resp.data);
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
