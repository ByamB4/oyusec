<template>
  <v-tabs v-model="tab" vertical>
    <v-tab v-for="item of tabs" :key="item.name">
      <v-row justify="start" class="px-3" align="center">
        <v-icon left v-text="item.icon" />
        <span v-text="item.name" />
      </v-row>
    </v-tab>
    <v-tab-item v-for="comp in comps" :key="comp" tile>
      <component :is="comp" />
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  components: {
    Standard: () => import("~/components/admin/challenges/Standard"),
    Dynamic: () => import("~/components/admin/challenges/Dynamic"),
    Challenges: () => import("~/components/admin/challenges/Challenges"),
    Challenge: () => import("~/components/admin/challenges/Challenge"),
  },
  middleware: ["admin"],
  data: () => ({
    comps: ["Standard", "Dynamic", "Challenges", "Challenge"],
    tabs: [
      { name: "Стандарт", icon: "mdi-sword" },
      { name: "Динамик", icon: "mdi-sword-cross" },
      { name: "Бодлогууд" },
      { name: "Бодлого" },
    ],
  }),
  computed: {
    tab: {
      set(tab) {
        this.$store.commit("admin/SET_TAB", tab)
      },
      get() {
        return this.$store.state.admin.tab
      },
    },
  },
}
</script>
