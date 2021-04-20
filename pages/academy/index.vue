<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col v-for="ac in academies" :key="ac.id" cols="6">
            <AcademyTutorial :tutorial="ac" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <AcademyTips />
        <AcademyRate />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  async asyncData(context) {
    await Promise.all([
      context.store.dispatch("academy/updateAcademies", context)
    ])
  },
  computed: {
    ...mapGetters({
      academies: "academy/getAcademies"
    })
  }
}
</script>
