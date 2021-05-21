<template>
  <v-row>
    <v-col cols="12">
      <v-tabs>
        <v-tab v-for="item of $t('contribute.tab')" :key="item.name">
          <v-icon v-text="item.icon" />
          <span class="ml-3" v-text="item.name" />
        </v-tab>
        <v-tab-item v-for="_ in tabs" :key="_" class="mt-3">
          <component :is="_" />
        </v-tab-item>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    RequestChallenge: () => import("./RequestChallenge"),
    AddWriteup: () => import("./AddWriteup"),
  },
  data: () => ({
    tabs: ["RequestChallenge", "AddWriteup"],
  }),
};
</script>

<style></style>
