<template>
  <v-row>
    <v-col
      v-for="social in links"
      :key="social.title"
      cols="6"
      class="col-gray-300"
    >
      <div class="text-truncate">
        <v-icon color="grey lighten-2" size="24" v-text="social.icon" />
        <span v-text="social.title" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: "Pyrgopolinices Nelius",
        icon: "mdi-facebook",
      },
      {
        title: "ByamB4",
        icon: "mdi-github",
      },
      {
        title: "ByamB4",
        icon: "mdi-instagram",
      },
      {
        title: "ByamB4",
        icon: "mdi-twitter",
      },
    ],
  }),
  // computed: {
  //   ...mapGetters({
  //     profile: "user/getProfile",
  //   }),
  // },
}
</script>

<style></style>
