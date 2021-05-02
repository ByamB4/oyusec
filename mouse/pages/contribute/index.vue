<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-tabs class="font-exo" hide-slider>
          <v-tab v-for="item of $t('contribute.tab')" :key="item.name">
            <v-icon v-text="item.icon" />
            <span class="ml-3" v-text="item.name" />
          </v-tab>
          <v-tab-item>
            <ContributeRequestchallenge />
          </v-tab-item>
          <v-tab-item>
            <ContributeAddwriteup />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.contribute.title
    }
  }
}
</script>
