<template>
  <v-progress-linear
    :active="this.$store.state.loading"
    :indeterminate="this.$store.state.loading"
    absolute
    height="2"
    color="deep-purple accent-1"
  />
</template>

<script>
export default {
  name: "AppLoading",
};
</script>
