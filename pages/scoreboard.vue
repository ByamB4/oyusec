<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <v-simple-table class="font-monts">
          <thead>
            <tr>
              <th
                class="text-center white--text"
                style="width: 10%"
                v-text="$t('rank')"
              />
              <th
                class="text-left white--text"
                style="width: 50%"
                v-text="$t('user')"
              />
              <th
                class="text-center white--text"
                style="width: 40%"
                v-text="$t('score')"
              />
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, ind) in scoreboard" :key="ind">
              <td class="text-center" v-text="ind + 1"></td>
              <td>
                <nuxt-link
                  :to="
                    localePath({
                      name: 'user-slug',
                      params: { slug: user.username },
                    })
                  "
                  ><span class="white--text" v-text="user.username" />
                </nuxt-link>
              </td>
              <td class="text-center" v-text="user.score"></td>
              <td class="text-center" v-text="user.first_blood"></td>
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
  async asyncData(context) {
    await context.store.dispatch("scoreboard/update")
  },
  head: () => ({
    title: "Онооны самбар",
  }),
  computed: {
    ...mapGetters({
      scoreboard: "scoreboard/getScoreboard",
    }),
  },

  mounted() {
    this.interval = setInterval(() => {
      this.$store.dispatch("scoreboard/update")
    }, 30 * 10000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
}
</script>
