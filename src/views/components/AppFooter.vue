<template>
  <v-footer padless style="background-color: #0c1221">
    <v-col class="text-right font-monts" cols="12">
      <span class="amber--text darken-4--text"
        >© {{ new Date().getFullYear() }} {{ this.$store.state.appname }}</span
      >
      <span class="ml-2 text--disabled">Beta version</span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
