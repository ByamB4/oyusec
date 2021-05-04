<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="user-bg" dark>
          <v-card-title>
            <h3 class="ml-10" v-text="$t('topPlayers')" />
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              dense
              append-icon="mdi-magnify"
              :label="$t('search')"
              single-line
              hide-details
            >
            </v-text-field>
          </v-card-title>
          <v-data-table
            :headers="$t('scoreboard.headers')"
            :items="scoreboard"
            :items-per-page="20"
            :search="search"
            :loading-text="$t('loading')"
            :loading="loading"
            :footer-props="{ itemsPerPageText: '' }"
          >
            <template #[`item.username`]="{ item }" class="text-center">
              <nuxt-link
                :to="
                  localePath({
                    name: 'user-slug',
                    params: { slug: item.slug }
                  })
                "
              >
                <span v-text="item.username" />
              </nuxt-link>
            </template>
            <template #[`item.place`]="{ item }" class="text-center">
              <v-icon v-if="item.place === 1" class="col-gold"
                >mdi-crown-outline</v-icon
              >
              <v-icon v-else-if="item.place === 2" class="col-silver"
                >mdi-crown-outline</v-icon
              >
              <v-icon v-else-if="item.place === 3" class="col-bronze"
                >mdi-crown-outline</v-icon
              >
              <template v-else>
                <span class="f-18 text-center" v-text="item.place" />
              </template>
            </template>

            <template #[`item.total_solved_challs`]="{ item }">
              <span>{{ item.total_solved_challs }}</span>
              <template v-if="item.fblood > 0">
                <v-icon color="red darken-1" size="15">mdi-water</v-icon>
                <span class="red--text darken-1--text" v-text="item.fblood" />
              </template>
            </template>

            <template #[`item.progress`]="{ item }">
              <v-tooltip bottom color="amber darken-4">
                <template #activator="{ on, attrs }">
                  <v-progress-linear
                    :value="item.progress"
                    height="10"
                    width="200"
                    color="amber darken-1"
                    background-opacity="0.2"
                    rounded
                    v-bind="attrs"
                    v-on="on"
                  ></v-progress-linear>
                </template>
                <span v-text="item.progress" />
              </v-tooltip>
            </template>

            <template #[`item.total_rating`]="{ item }">
              <span v-text="item.total_rating" />
              <template v-if="item.total_win > 0">
                <v-icon class="col-gold" size="15">mdi-trophy</v-icon>
                <span class="col-gold" v-text="item.total_win" />
              </template>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  // async asyncData(context) {
  //   await context.store.dispatch("scoreboard/update")
  // },

  data: () => ({
    search: "",
    loading: true
  }),
  // async fetch() {
  //   await this.$store.dispatch("scoreboard/update")
  // },
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.rankings.title
    }
  },

  computed: {
    ...mapGetters({
      scoreboard: "scoreboard/getScoreboard"
    })
  },
  mounted() {
    this.$store.dispatch("scoreboard/update")
  },
  created() {
    this.loading = false
  }
}
</script>
