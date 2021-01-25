<template>
  <div class="bg-dark-1">
    <div v-if="loading">
      <v-skeleton-loader type="actions"></v-skeleton-loader>
    </div>
    <div v-else>
      <v-row class="mx-1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-col cols="12" v-bind="attrs" v-on="on">
              <v-btn color="primary" depressed small>
                <v-icon left v-text="mdiPencil"> </v-icon>
                Засах
              </v-btn>
            </v-col>
          </template>
          <span>Үйлдлүүд</span>
        </v-tooltip>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mdiPencil } from "@mdi/js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      url: `profile/${this.$route.params.slug}`,
      mdiPencil: mdiPencil,
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
