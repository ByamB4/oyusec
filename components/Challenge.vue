<template>
  <v-expansion-panel class="challenge mt-2 font-exo">
    <v-expansion-panel-header
      expand-icon
      :class="{ solved: challenge.solved && $auth.loggedIn }"
    >
      <v-row align="center" no-gutters>
        <v-col xs="6" sm="6" md="6" lg="6" xl="8" class="f-15">
          <strong class="ml-3" v-text="challenge.name" />
        </v-col>
        <v-col xs="6" sm="6" md="6" lg="6" xl="4" align="right">
          <v-chip small class="ml-1 white--text" color="primary">
            <strong v-text="$t('solved')" />
            <span class="ml-1" v-text="challenge.solves" />
          </v-chip>
          <v-chip small class="ml-1 white--text" color="purple darken-2">
            <strong v-text="$t('score')" />
            <span class="ml-1" v-text="challenge.value" />
          </v-chip>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content v-if="!challenge.solved">
      <div class="mt-3" v-html="$md.render(challenge.description)" />
      <v-form
        v-if="$auth.loggedIn && status != 'Дууссан'"
        ref="form"
        v-model="form.valid"
        class="mt-4 f-15"
        @submit.prevent="submit"
      >
        <v-row justify="center">
          <v-col cols="5">
            <v-text-field
              v-model="form.submission"
              :class="{ incorrect }"
              :rules="[rules.required]"
              :loading="form.loading"
              color="white"
              placeholder="flag{.*}"
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
    form: {
      submission: "",
      valid: true,
      loading: false,
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
  },
}
</script>

<style lang="scss">
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
