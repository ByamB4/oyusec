<template>
  <v-expansion-panel class="challenge mt-2 font-exo">
    <v-dialog v-model="dialog.show" max-width="400px">
      <v-simple-table class="user-bg font-exo" dark>
        <tbody>
          <tr v-for="user in solvers" :key="user.username">
            <td>
              <nuxt-link
                :to="
                  localePath({
                    name: 'user-slug',
                    params: { slug: user.slug },
                  })
                "
                ><span class="f-18 white--text" v-text="user.username" />
              </nuxt-link>
            </td>
            <td class="f-15 text-center" v-text="user.time" />
          </tr>
        </tbody>
      </v-simple-table>
    </v-dialog>
    <v-expansion-panel-header
      expand-icon
      :class="{
        solved:
          $auth.loggedIn &&
          (challenge.solved ||
            $auth.user.username == challenge.author.username),
      }"
    >
      <v-row align="center" no-gutters>
        <v-col xs="12" sm="4" md="5" lg="6" xl="8" class="f-15">
          <strong class="ml-3" v-text="challenge.name" />
        </v-col>
        <v-col xs="12" sm="8" md="7" lg="6" xl="4" align="right">
          <v-chip
            class="ma-2"
            close
            small
            color="primary"
            text-color="white"
            close-icon="mdi-eye-outline"
            @click:close="showSolves"
          >
            <strong v-text="$t('solved')" />
            <span class="ml-1" v-text="challenge.solves" />
          </v-chip>
          <v-chip small class="ml-1" color="purple darken-2">
            <strong v-text="$t('score')" />
            <span class="ml-1" v-text="challenge.value" />
          </v-chip>
          <v-chip small class="ml-1" color="teal darken-2">
            <strong v-text="$t('added')" />
            <nuxt-link
              :to="
                localePath({
                  name: 'user-slug',
                  params: { slug: challenge.author.slug },
                })
              "
            >
              <span class="ml-1" v-text="challenge.author.username" />
            </nuxt-link>
          </v-chip>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="mt-3" v-html="$md.render(challenge.description)" />
      <div
        v-if="
          status == 'Дууссан' ||
          challenge.solved ||
          ($auth.loggedIn &&
            $auth.user.username == challenge.author.username) ||
          status == 'Дууссан'
        "
      >
        <v-row>
          <v-col cols="12" class="text-center">
            <h4
              v-if="
                $auth.loggedIn &&
                $auth.user.username == challenge.author.username
              "
              v-text="$t('youHaveAddedThisChallenge')"
            />
            <h4
              v-else-if="status == 'Дууссан'"
              v-text="$t('competitionOver')"
            />
            <h4
              v-else-if="challenge.solved"
              v-text="$t('youHaveSolvedThisChallenge')"
            />
            <span
              class="font-weight-bold"
              style="color: #e85154"
              v-text="$t('solution')"
            />
            <span>(soon)</span>
            <!-- <nuxt-link
              :to="
                localePath({
                  name: 'writeup-id',
                  params: { id: challenge.id },
                })
              "
            >
            </nuxt-link> -->
          </v-col>
        </v-row>
      </div>
      <div v-else-if="$auth.loggedIn">
        <v-form
          ref="form"
          v-model="form.valid"
          class="mt-4 f-15"
          @submit.prevent="submit"
        >
          <v-row class="d-flex justify-center">
            <v-col cols="5">
              <v-text-field
                v-model="form.submission"
                :class="{ incorrect }"
                :rules="[rules.required]"
                :loading="form.loading"
                color="white"
                placeholder="oyusec{.*}"
                dense
                autofocus
                trim
              />
            </v-col>
            <v-col cols="2">
              <v-btn
                :disabled="!form.valid"
                :loading="form.loading"
                type="submit"
                depressed
                small
                color="primary"
                v-text="$t('submit')"
              />
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    challenge: {
      required: true,
      type: Object,
    },
    status: {
      required: false,
      type: String,
    },
  },
  data: () => ({
    incorrect: false,
    dialog: {
      show: false,
      itemID: null,
    },
    solvers: [],
    form: {
      submission: "",
      valid: true,
      loading: false,
    },
    scrollOptions: {
      duration: 1500,
      offset: 0,
      easing: "easeInOutQuad",
    },
    rules: {
      required: (value) => !!value || "Заавал бөглөх ёстой",
    },
  }),
  methods: {
    reset() {
      this.form = {
        submission: "",
        valid: true,
        loading: false,
      }
      this.$refs.form.resetValidation()
      this.form.loading = false
    },
    async submit() {
      this.incorrect = false
      this.form.loading = true
      const { data } = await this.$axios.post("api/challenges/attempt/", {
        challenge_id: this.challenge.id,
        submission: this.form.submission,
      })
      if (!data.success) {
        this.$toast.error(data.detail, {
          icon: "alert-circle",
        })
        this.reset()
        return
      }
      if (data.status === "correct") {
        this.reset()
        this.isSolved = true
        if (this.challenge.competition) {
          this.$store.commit(
            "competition/ADD_CHALLENGE_SOLVE",
            this.challenge.id
          )
          await this.$store.dispatch("competition/updateSolved")
          await this.$store.dispatch("competition/updateScoreboard")
        } else {
          this.$store.commit("challenge/ADD_CHALLENGE_SOLVE", this.challenge.id)
          await this.$store.dispatch("challenge/updateSolved")
          await this.$store.dispatch("user/getProfile", {
            slug: this.$auth.user.slug,
          })
        }
      } else {
        this.reset()
        this.incorrect = true
        if (this.challenge.competition) {
          await this.$store.dispatch("competition/updateScoreboard")
        }
        setTimeout(() => {
          this.incorrect = false
        }, 500)
      }
    },
    async showSolves() {
      this.dialog.show = true
      const { data } = await this.$axios.get(
        `api/challenge/${this.challenge.id}/solves/`
      )
      if (data.success) {
        this.solvers = data.data
      } else {
        this.$toast.error(data.detail, {
          icon: "alert-circle",
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.solved {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}
.incorrect {
  animation-name: shake;
  animation-duration: 0.5s, 0.35s;
  animation-iteration-count: 1, 2;
}
@keyframes shake {
  0%,
  20%,
  40%,
  60%,
  80% {
    transform: translateX(10px);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }
}
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: rgba(255, 255, 255, 0.12) !important;
}
</style>
