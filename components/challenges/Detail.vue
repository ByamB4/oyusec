<template>
  <v-container class="challenge">
    <v-row v-if="!loading">
      <v-col cols="12" align="center">
        <h1 v-text="challenge.name" />
        <div
          v-if="challenge"
          class="text-justify mt-3"
          v-html="$md.render(challenge.description)"
        />
      </v-col>
      <v-col
        v-if="
          $auth.loggedIn &&
          challenge &&
          !chall.solved &&
          challenge.author.username !== $auth.user.username
        "
        cols="12"
      >
        <v-form
          ref="form"
          v-model="form.valid"
          class="f-15"
          @submit.prevent="submit"
        >
          <v-row class="d-flex justify-center">
            <v-col cols="5">
              <v-text-field
                v-model="form.submission"
                :class="{ incorrect }"
                :rules="[$rules.required]"
                :loading="form.loading"
                color="white"
                placeholder="oyusec{.*}"
                dense
              />
            </v-col>
            <v-col cols="2">
              <v-btn
                :disabled="!form.valid || form.loading"
                :loading="form.loading"
                type="submit"
                depressed
                small
                color="primary"
              >
                <span v-text="$t('submit')" />
                <template #loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-skeleton-loader
          type="table-heading, list-item-one-line, image, table-tfoot"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    chall: {
      required: true,
    },
  },
  data: () => ({
    challenge: false,
    incorrect: false,
    loading: false,
    dialog: {
      show: false,
      itemID: null,
    },
    form: {
      submission: "",
      loading: false,
    },
  }),
  watch: {
    async chall(a, b) {
      this.loading = true
      this.challenge = await this.$store.dispatch("challenge/getChallenge", {
        id: a.uuid,
      })
      this.loading = false
    },
  },
  methods: {
    reset() {
      this.form = {
        submission: "",
        loading: false,
      }
      this.$refs.form.resetValidation()
    },
    async submit() {
      this.incorrect = false
      this.form.loading = true
      const { data } = await this.$axios.post("api/challenges/attempt/", {
        challenge_id: this.challenge.id,
        submission: this.form.submission,
      })
      this.reset()
      if (!data.success) {
        this.$toast.error(data.detail, {
          icon: "alert-circle",
        })
        return
      }
      if (data.status === "correct") {
        this.$emit("solved")
        this.$store.commit("challenge/ADD_CHALLENGE_SOLVE", this.challenge.id)
        await this.$store.dispatch("user/getProfile", {
          slug: this.$auth.user.slug,
        })
      } else {
        this.incorrect = true
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

<style lang="scss">
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
