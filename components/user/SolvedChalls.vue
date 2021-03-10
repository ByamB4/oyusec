<template>
  <v-row v-if="challenges.length !== 0" class="mx-3">
    <h2 style="letter-spacing: 0.3px" class="font-press f-15">[ Бодсон ]</h2>
    <v-col cols="12">
      <v-simple-table class="font-monts">
        <tbody>
          <tr v-for="(challenge, ind) in challenges" :key="ind">
            <td v-text="challenge.created"></td>
            <td class="text-center" v-text="challenge.category"></td>
            <td class="text-center" v-text="challenge.name"></td>
            <td class="text-center" v-text="challenge.value"></td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    challenges: [],
  }),
  created() {
    this.getSolvedChallenges()
  },
  methods: {
    async getSolvedChallenges() {
      const { data } = await this.$axios.get(
        `api/user/solves/${this.$route.params.slug.toLowerCase()}/`
      )
      if (data.success) {
        this.challenges = data.data
      }
    },
  },
}
</script>
