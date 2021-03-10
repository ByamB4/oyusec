<template>
  <v-card class="user-bg" tile>
    <v-tabs>
      <v-tab v-for="tab in tabs" :key="tab.name">
        <span v-text="tab" />
      </v-tab>
      <v-tab-item v-for="comp in compNames" :key="comp">
        <component :is="comp" />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import general from "./challenge/general"
import hints from "./challenge/hints"
import flags from "./challenge/flags"
import tags from "./challenge/tags"

export default {
  components: { general, hints, flags, tags },
  data() {
    return {
      compNames: ["general", "hints", "flags", "tags"],
      tabs: ["General", "Hints", "Flag", "Tag"],
    }
  },
}
</script>
