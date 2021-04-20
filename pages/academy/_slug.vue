<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <AcademyTutorialDetail />
      </v-col>
      <v-col cols="4">
        <AcademySection :sections="academy.sections" />
        <AcademyRate />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters({
      academy: "academy/getAcademy"
    })
  },
  created() {
    this.$store.dispatch(
      "academy/updateAcademy",
      this.$route.path.split("/").pop()
    )
  }
}
</script>

<style></style>
