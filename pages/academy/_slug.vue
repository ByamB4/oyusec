<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="7" md="7" lg="8" xl="8">
        <AcademySectionDetail />
      </v-col>
      <v-col cols="12" sm="5" md="5" lg="4" xl="4">
        <AcademySection />
        <AcademyRate />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData(context) {
    const { slug } = context.params
    await Promise.all([context.store.dispatch("academy/updateAcademy", slug)])
  }
}
</script>
