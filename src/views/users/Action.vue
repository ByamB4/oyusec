<template>
  <div class="bg-dark">
    <div v-if="loading">
      <v-skeleton-loader type="actions"></v-skeleton-loader>
    </div>
    <div v-else>
      <v-row class="mx-1">
        <v-col cols="12" align="right">
          <router-link
            :to="{ name: 'Профайл засах', params: { slug: user.slug } }"
          >
            <v-btn color="primary" depressed small v-if="edit">
              <v-icon left v-text="mdiPencil"> </v-icon>
              Засах
            </v-btn>
          </router-link>
        </v-col>
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
      edit: false,
      loading: true,
    };
  },

  computed: {
    ...mapState(["isLogged"]),
    ...mapState(["user"]),
  },

  watch: {
    "$store.state.isLogged": function() {
      this.isUser();
    },
  },

  created() {
    this.isUser();
  },

  methods: {
    async isUser() {
      const resp = await this.$api.get(this.url);
      if (this.isLogged && resp.data.username == this.user.username) {
        this.edit = true;
      } else {
        this.edit = false;
      }
      this.loading = false;
    },
  },
};
</script>
