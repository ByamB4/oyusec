<template>
  <v-container fluid class="mt-10">
    <v-row justify="center">
      <v-col cols="11">
        <v-tabs vertical>
          <v-tab
            v-for="item of $t('contribute.challengesTab')"
            :key="item.name"
          >
            <v-row justify="start" class="px-3 font-exo" align="center">
              <v-icon left v-text="item.icon" />
              <span v-text="item.name" />
            </v-row>
          </v-tab>
          <v-tab-item tile>
            <ContributeRequestchallenge />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
