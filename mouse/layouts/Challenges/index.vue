<template>
  <div>
    <Gadgets />
    <Challenges />
  </div>
</template>

<script>
export default {
  components: {
    Gadgets: () => import("./Gadgets/"),
    Challenges: () => import("./Challenges/"),
  },
};
</script>

<style></style>
