<template>
  <v-container>
    <v-row class="font-cabin">
      <v-col xs="12" cols="12" sm="12" md="5" lg="5" xl="6">
        <v-sheet rounded elevation="5">
          <Profile />
        </v-sheet>
        <v-sheet rounded elevation="5" class="mt-5">
          <Action />
        </v-sheet>
      </v-col>
      <v-col xs="12" cols="12" sm="12" md="7" lg="7" xl="6">
        <v-sheet
          rounded
          elevation="5"
          :class="{ 'mt-2': $vuetify.breakpoint.smAndDown }"
        >
          <Challs />
        </v-sheet>
        <v-sheet rounded elevation="5" class="mt-5">
          <Rating />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    Challs: () => import("./Challs"),
    Rating: () => import("./Rating"),
    Profile: () => import("./Profile"),
    Action: () => import("./Action"),
  },
};
</script>
