<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center" class="font-exo">
          <v-col cols="12" align="center">
            <span style="font-size: 25px">An error occurred</span>
            <v-icon size="30">mdi-emoticon-sad-outline</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
