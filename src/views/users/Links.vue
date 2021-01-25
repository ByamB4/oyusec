<template>
  <div class="bg-dark">
    <div v-if="loading">
      <v-skeleton-loader type="card-heading"></v-skeleton-loader>
    </div>
    <div v-else>
      <v-row class="mx-1">
        <v-col cols="12" align="right">
          <template v-for="link in links">
            <v-btn
              v-if="link.url != ''"
              :key="link.icon"
              :href="link.url"
              target="_blank"
              icon
              class="ml-4"
            >
              <v-icon size="40" v-text="link.icon"></v-icon>
            </v-btn>
          </template>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mdiInstagram, mdiFacebook, mdiGithub, mdiLinkedin } from "@mdi/js";

export default {
  data() {
    return {
      url: `profile/${this.$route.params.slug}/links`,
      links: [
        {
          icon: mdiInstagram,
          url: "",
        },
        {
          icon: mdiFacebook,
          url: "",
        },
        {
          icon: mdiGithub,
          url: "",
        },
        {
          icon: mdiLinkedin,
          url: "",
        },
      ],
      loading: true,
    };
  },

  created() {
    this.getUser();
  },

  methods: {
    async getUser() {
      const resp = await this.$api.get(this.url);
      this.links[0].url = resp.data.insta_link;
      this.links[1].url = resp.data.facebook_link;
      this.links[2].url = resp.data.github_link;
      this.links[3].url = resp.data.linkedin_link;
      this.loading = false;
    },
  },
};
</script>
