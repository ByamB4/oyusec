<template>
  <v-container fill-height>
    <v-row class="font-exo" justify="center">
      <v-col xs="12" cols="12" sm="12" md="7" lg="5" xl="6">
        <AuthLogin v-if="login" />
        <AuthRegister v-else :login="login" @switch="login = !login" />
        <AuthSwitcher :login="login" @switch="login = !login" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // Default behavior is login
    login: true
  })
}
</script>
