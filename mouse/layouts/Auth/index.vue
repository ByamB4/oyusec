<template>
  <v-row class="font-exo" justify="center">
    <v-col xs="12" cols="12" sm="12" md="7" lg="6" xl="5">
      <AuthLogin v-if="login" />
      <AuthRegister v-else :login="login" @switch="login = !login" />
      <AuthSwitcher :login="login" @switch="login = !login" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    // Default behavior is login
    login: true,
  }),
};
</script>

<style></style>
