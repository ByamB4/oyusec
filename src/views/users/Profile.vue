<template>
  <div class="bg-dark-1">
    <div v-if="loading">
      <v-skeleton-loader
        type="list-item-avatar-two-line, article, actions"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <v-row class="mx-1">
        <v-col xs="12" cols="4" sm="3" md="4" lg="4" xl="3">
          <v-avatar size="100">
            <v-img :src="data.photo" />
          </v-avatar>
        </v-col>
        <v-col xs="12" cols="8" sm="9" md="8" lg="8" xl="9">
          <h2 v-text="data.fullname"></h2>
          <h3 class="mt-1 text--secondary" v-text="data.username"></h3>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-col cols="12" v-bind="attrs" v-on="on">
              <v-icon
                size="42"
                v-text="mdiTrophy"
                v-for="index in data.fblood"
                color="amber"
                :key="index"
              ></v-icon>
            </v-col>
          </template>
          <span>Түрүүлж бодсон</span>
        </v-tooltip>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mdiTrophy } from "@mdi/js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      url: `profile/${this.$route.params.slug}`,
      mdiTrophy: mdiTrophy,
      data: {},
      loading: true,
    };
  },

  computed: {
    ...mapState(["isLogged"]),
    ...mapState(["user"]),
    ...mapState(["profile"]),
  },

  created() {
    this.getUser();
  },

  methods: {
    async getUser() {
      const resp = await this.$api.get(this.url);
      this.data = resp.data;
      this.loading = false;
    },
  },
};
</script>
