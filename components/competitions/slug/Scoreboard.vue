<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-simple-table dark class="font-exo">
          <thead>
            <tr>
              <th
                class="text-center f-17"
                style="width: 10%"
                v-text="$t('rank')"
              />
              <th
                class="text-left f-17"
                style="width: 50%"
                v-text="$t('user')"
              />
              <th
                class="text-center f-17"
                style="width: 40%"
                v-text="$t('score')"
              />
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, ind) in scoreboard" :key="ind">
              <td class="text-center">
                <v-icon v-if="ind === 0" color="#FFDF00"
                  >mdi-crown-outline</v-icon
                >
                <v-icon v-else-if="ind === 1" color="#D3D3D3"
                  >mdi-crown-outline</v-icon
                >
                <v-icon v-else-if="ind === 2" color="#CD7F32"
                  >mdi-crown-outline</v-icon
                >
                <template v-else>
                  <span class="f-18">{{ ind + 1 }}</span>
                </template>
              </td>
              <td>
                <nuxt-link
                  :to="
                    localePath({
                      name: 'user-slug',
                      params: { slug: user.username },
                    })
                  "
                  ><span class="f-18" v-text="user.username" />
                </nuxt-link>
              </td>
              <td class="f-18 text-center" v-text="user.score" />
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      scoreboard: "competition/getScoreboard",
      competition: "competition/getCompetition",
    }),
  },
  created() {
    // If component loaded run once time
    this.$store.dispatch("competition/updateScoreboard")
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.competition.status === "Шууд") {
        this.$store.dispatch("competition/updateScoreboard")
      }
    }, 10 * 5000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
}
</script>
