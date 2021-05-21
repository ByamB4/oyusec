<template>
  <v-row class="mx-1 font-exo">
    <v-col cols="12">
      <h2 style="letter-spacing: 0.3px" class="font-press f-15">
        [ {{ profile.username }} ]
      </h2>

      <!-- <h3 class="mt-5 text-gray-400">
        {{ $t("days") }}: <span class="white--text" v-text="profile.days" />
      </h3>
      <h3 class="mt-2 text-gray-400">
        {{ $t("score") }}: <span class="white--text" v-text="profile.score" />
      </h3> -->
      <h3 class="mt-2 text-gray-400">
        {{ $t("user_type") }}:
        <template v-if="profile.type === 'admin'">
          <v-icon color="white">mdi-account-cog</v-icon>
        </template>
        <template v-else>
          <v-icon color="white">mdi-account</v-icon>
        </template>
      </h3>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    profile: {},
  }),
  created() {
    this.getUserProfile();
  },
  methods: {
    async getUserProfile() {
      const { data } = await this.$axios.get(
        `api/user/profile/${this.$route.params.slug.toLowerCase()}/`
      );
      if (data.success) {
        this.profile = data.data;
      } else {
        this.$toast.error(data.detail, { icon: "alert-circle" });
      }
    },
  },
};
</script>
