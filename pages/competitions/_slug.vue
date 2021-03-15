<template>
  <h1>hey {{ $route.params }}</h1>
</template>

<script>
export default {
  data: () => ({
    competition: {},
  }),
  head() {
    return {
      title: this.$route.params.slug,
    }
  },
  created() {
    this.getCompetition()
  },
  methods: {
    async getCompetition() {
      const { data } = await this.$axios.get(
        `api/user/profile/${this.$route.params.slug.toLowerCase()}/`
      )
      console.log(data)
      // if (data.success) {
      //   this.profile = data.data
      // } else {
      //   this.$toast.error(data.detail, { icon: "alert-circle" })
      // }
    },
  },
}
</script>

<style></style>
