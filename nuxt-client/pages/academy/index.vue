<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="8" lg="9" xl="9">
        <v-row>
          <v-col
            v-for="ac in academies.filter(({ category }) =>
              cat.includes(category)
            )"
            :key="ac.id"
            cols="12"
            sm="6"
            md="6"
            lg="3"
            xl="3"
          >
            <AcademyTutorial :tutorial="ac" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="3" xl="3">
        <AcademyTips />
        <AcademyContribute />
        <AcademyFilter @filter="upFilter" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  // async asyncData(context) {
  //   await Promise.all([
  //     context.store.dispatch("academy/updateAcademies", context)
  //   ])
  // },
  data: () => ({
    cat: []
  }),
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.academy.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "test challenge page"
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      academies: "academy/getAcademies"
    })
  },
  mounted() {
    this.$store.dispatch("academy/updateAcademies")
  },
  methods: {
    upFilter(_) {
      this.cat = _
    }
  }
}
</script>
