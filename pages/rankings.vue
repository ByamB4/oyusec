<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="user-bg font-exo" dark>
          <v-card-title>
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
          <v-card-body>
            <v-data-table
              :headers="headers"
              :items="scoreboard"
              :items-per-page="20"
              :search="search"
              :loading-text="$t('loading')"
              class="elevation-10"
              :footer-props="{ itemsPerPageText: '' }"
            >
              <template #[`item.rank`]="{ index }" class="text-center">
                <v-icon v-if="index === 0" color="#FFDF00"
                  >mdi-crown-outline</v-icon
                >
                <v-icon v-else-if="index === 1" color="#D3D3D3"
                  >mdi-crown-outline</v-icon
                >
                <v-icon v-else-if="index === 2" color="#CD7F32"
                  >mdi-crown-outline</v-icon
                >
                <template v-else>
                  <span class="f-18 text-center">{{ index + 1 }}</span>
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
                <v-tooltip bottom>
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
                  <span>{{ item.progress }}%</span>
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
          </v-card-body>
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
    headers: [
      {
        text: "Rank",
        align: "center",
        sortable: false,
        value: "rank",
        width: "10%",
      },
      {
        text: "User",
        value: "username",
        sortable: false,
        width: "15%",
      },
      {
        text: "Challenges",
        value: "total_solved_challs",
        sortable: true,
        width: "15%",
        align: "center",
      },
      {
        text: "Ownership",
        value: "progress",
        sortable: false,
        align: "center",
        width: "20%",
      },
      {
        text: "Competition",
        value: "total_rating",
        sortable: true,
        align: "center",
        width: "20%",
      },
      {
        text: "Score",
        value: "score",
        sortable: true,
        align: "center",
        width: "20%",
      },
    ],
  }),

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
