<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="user-bg font-exo" dark>
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
            class="elevation-10"
          >
            <template #[`item.username`]="{ item }" class="text-center">
              <nuxt-link
                :to="
                  localePath({
                    name: 'user-slug',
                    params: { slug: item.slug },
                  })
                "
              >
                <span v-text="item.username" />
              </nuxt-link>
            </template>
            <template #[`item.place`]="{ item }" class="text-center">
              <v-icon v-if="item.place == 1" color="#FFDF00"
                >mdi-crown-outline</v-icon
              >
              <v-icon v-else-if="item.place == 2" color="#D3D3D3"
                >mdi-crown-outline</v-icon
              >
              <v-icon v-else-if="item.place == 3" color="#CD7F32"
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
                <span class="font-exo">{{ item.progress }}%</span>
              </v-tooltip>
            </template>

            <template #[`item.total_rating`]="{ item }">
              <span>{{ item.total_rating }}</span>
              <template v-if="item.total_win > 0">
                <v-icon color="#ffdf00" size="15">mdi-trophy</v-icon>
                <span style="color: #ffdf00" v-text="item.total_win" />
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
  async asyncData(context) {
    await context.store.dispatch("scoreboard/update")
  },

  data: () => ({
    search: "",
    loading: true,
  }),

  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.rankings.title,
    }
  },

  computed: {
    ...mapGetters({
      scoreboard: "scoreboard/getScoreboard",
    }),
  },
  mounted() {
    this.loading = false
  },
}
</script>
