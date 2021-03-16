<template>
  <v-card class="user-bg font-cabin my-3">
    <v-row>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-map-marker</v-icon>
          <span>Байршил</span>
        </h4>
        <span>онлайн</span>
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-account</v-icon>
          <span>Элсэлт</span>
        </h4>
        <span>хувь хүн</span>
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-calendar-month</v-icon>
          <span>Эхлэх хугацаа</span>
        </h4>
        <span>1 March 2021 , 10:00 am UTC</span>
      </v-col>
      <v-col cols="3" align="center" class="py-5">
        <h4>
          <v-icon color="white">mdi-calendar-month</v-icon>
          <span>Дуусах хугацаа</span>
        </h4>
        <span>31 March 2021 , 22:00 pm UTC</span>
      </v-col>
    </v-row>
    <!-- <v-divider class="mx-4"></v-divider> -->
    <v-card-title>
      <v-icon color="white">mdi-file-document-outline</v-icon>
      <h4 class="ml-2">Тайлбар</h4>
    </v-card-title>
    <v-card-text>
      <span class="f-17">
        {{ competition.description }}
      </span>
    </v-card-text>
    <!-- <v-divider class="mx-4"></v-divider> -->
    <v-card-title>
      <v-icon color="white">mdi-lock-check</v-icon>
      <h4 class="ml-2">Дүрэм</h4>
    </v-card-title>
    <v-card-text>
      <span class="f-17">
        {{ competition.description }}
      </span>
    </v-card-text>
    <!-- <v-divider class="mx-4"></v-divider> -->
    <v-card-title>
      <v-icon color="white">mdi-trophy</v-icon>
      <h4 class="ml-2">Шагнал</h4>
    </v-card-title>
    <v-card-text>
      <span class="f-17">
        {{ competition.description }}
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    competition: {},
  }),
  created() {
    this.getCompetition()
  },
  methods: {
    async getCompetition() {
      const { data } = await this.$axios.get(
        `api/competition/${this.$route.params.slug}/`
      )
      if (data.success) {
        this.competition = data.data
      }
    },
  },
}
</script>

<style></style>
