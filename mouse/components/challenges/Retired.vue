<template>
  <v-expansion-panels class="mx-0">
    <v-expansion-panel v-for="(item, i) in 5" :key="i" class="user-bg">
      <v-expansion-panel-header class="user-bg">
        Forensics
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {}
</script>

<style></style>
