<template>
  <v-card class="user-bg">
    <v-card-title>
      <v-row align="center">
        <v-col cols="6" xs="6" sm="2" md="2" lg="2" xl="2">
          <v-progress-circular
            :size="100"
            :rotate="90"
            :width="5"
            :value="35"
            color="light-green accent-3"
          >
            <v-icon size="40" color="white">mdi-lock</v-icon>
          </v-progress-circular>
        </v-col>
        <v-col cols="6" xs="6" sm="5" md="6" lg="6" xl="6">
          <span class="text-uppercase text-gray-400 f-15"
            >NEW CRYPTO CHALLENGE</span
          >
          <h3>Can you unlock me ?</h3>
        </v-col>
        <v-col cols="12" xs="6" sm="5" md="4" lg="4" xl="4">
          <v-row no-gutters>
            <v-col cols="6" class="text-uppercase text-gray-400 f-13">
              <h4>Difficulty</h4>
              <h4>Category</h4>
              <h4>Releasing in</h4>
            </v-col>
            <v-col cols="6" class="f-16">
              <h4>Medium</h4>
              <h4>Cryptography</h4>
              <h4>19h 6m 59s</h4>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
