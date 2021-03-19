<template>
  <v-container class="font-exo">
    <v-row>
      <v-col cols="12" align="center">
        <h3>This page will update soon</h3>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-tabs vertical class="font-exo">
    <v-tab v-for="tab in tabs" :key="tab.name">
      <v-row justify="start" class="px-3" align="center">
        <v-icon left v-text="tab.icon" />
        <span v-text="tab.name" />
      </v-row>
    </v-tab>
    <v-tab-item v-for="comp in comps" :key="comp">
      <component :is="comp" />
    </v-tab-item>
  </v-tabs> -->
</template>

<script>
export default {
  // components: {
  //   config: () => import("/components/admin/config/config"),
  //   appearance: () => import("/components/admin/config/appearance"),
  //   times: () => import("/components/admin/config/times"),
  // },
  // middleware: ["admin"],
  // data: () => ({
  //   comps: ["config", "appearance", "times"],
  //   tabs: [
  //     { name: "Тохиргоо", icon: "mdi-auto-fix" },
  //     { name: "Үзэмж", icon: "mdi-brush" },
  //     { name: "Цаг", icon: "mdi-camera-timer" },
  //   ],
  // }),
}
// <style>
// .v-card
//   background-color: transparent !important
// .theme--dark.v-tabs-items
//   background-color: transparent !important
// .theme--dark.v-tabs > .v-tabs-bar
//   background-color: transparent !important
// </style>
</script>
