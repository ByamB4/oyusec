<template>
  <div class="bg-dark-1">
    <v-row class="mx-3">
      <v-col cols="12">
        <v-sparkline
          :labels="labels"
          :value="value"
          elevation="4"
          color="green"
          line-width="1"
          padding="8"
          auto-draw
        ></v-sparkline>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
