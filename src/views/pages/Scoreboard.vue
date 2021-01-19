<template>
  <div>
    <v-row class="mt-5" justify="center">
      <v-col cols="11" align="center">
        <v-icon size="40">{{ mdiCogRefresh }}</v-icon>
        <span class="f-20 font-press">Come back later</span>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mdiCogRefresh } from "@mdi/js";

export default {
  data: () => ({
    mdiCogRefresh: mdiCogRefresh,
  }),
};
</script>
<style lang=""></style>
