<template>
  <v-container>
    <!-- <v-row justify="center" class="font-exo">
      <v-col cols="10">
        <v-row align="center">
          <v-col cols="6">
            <h2 v-if="challenge" v-text="challenge.name" />
          </v-col>
          <v-col cols="6" align="end">
            <v-btn icon @click="edit = !edit">
              <v-icon>mdi-plus-box</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <WriteupAdd v-if="edit" />
        <v-expansion-panels v-else popout tile inset dark>
          <Writeup
            v-for="writeup in writeups"
            :key="writeup.id"
            :writeup="writeup"
          />
        </v-expansion-panels>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
// import { mapGetters } from "vuex"

// export default {
//   data: () => ({
//     edit: false,
//   }),
//   computed: {
//     ...mapGetters({
//       writeups: "writeup/getWriteups",
//       challenge: "writeup/getChallenge",
//     }),
//   },
//   async mounted() {
//     await this.$store.dispatch("writeup/updateWriteups", this.$route.params.id)
//   },
// }
</script>
