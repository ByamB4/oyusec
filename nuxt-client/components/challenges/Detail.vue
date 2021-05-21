<template>
  <v-container class="practice">
    <v-row v-if="!loading">
      <v-col cols="12" align="center">
        <h1 v-text="challenge.name" />
        <div
          class="text-justify mt-3"
          v-html="$md.render(challenge.description)"
        />
      </v-col>
      <v-col v-if="canSubmit" cols="12">
        <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
          <v-container>
            <v-row>
              <v-col cols="10">
                <v-text-field
                  v-model="form.submission"
                  :loading="form.loading"
                  :rules="[$rules.required]"
                  :class="{ incorrect }"
                  label="Хариугаа оруулна уу"
                  placeholder="oyusec{.*}"
                  color="white"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn
                  :loading="form.loading"
                  :disabled="!form.valid || form.loading"
                  type="submit"
                  block
                  elevation="2"
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
          </v-container>
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
      type: Object,
    },
    canSubmit: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    challenge: {
      description: "",
    },
    solves: null,
    solved: false,
    author: null,
    incorrect: false,
    loading: false,
    form: {
      submission: "",
      loading: false,
    },
  }),
  watch: {
    async chall(a, b) {
      this.loading = true;
      this.solves = a.solves;
      this.solved = a.solved;
      this.author = a.author;
      this.challenge = await this.$store.dispatch("challenge/getChallenge", {
        id: a.uuid,
      });
      this.loading = false;
    },
  },
  mounted() {
    this.initData();
    // this.loading = true
    // this.solves = this.chall.solves
    // this.challenge = await this.
  },
  methods: {
    async initData() {
      this.loading = true;
      this.solves = this.chall.solves;
      this.author = this.chall.author;
      this.challenge = await this.$store.dispatch("challenge/getChallenge", {
        id: this.chall.uuid,
      });
      this.loading = false;
    },
    reset() {
      this.form = {
        submission: "",
        loading: false,
      };
      this.$refs.form.resetValidation();
    },
    async submit() {
      this.incorrect = false;
      this.form.loading = true;
      const { data } = await this.$axios.post("api/challenges/attempt/", {
        challenge_id: this.challenge.id,
        submission: this.form.submission,
      });
      this.reset();
      if (!data.success) {
        this.$toast.error(data.detail, {
          icon: "alert-circle",
        });
        return;
      }
      if (data.status === "correct") {
        this.$emit("solved");
        this.$store.commit("challenge/ADD_CHALLENGE_SOLVE", this.challenge.id);
        await this.$store.dispatch("user/getProfile", {
          slug: this.$auth.user.slug,
        });
      } else {
        this.incorrect = true;
        setTimeout(() => {
          this.incorrect = false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss">
@import "assets/scss/chall.scss";

.practice {
  color: $light-yellow !important;
  text-align: justify !important;
  a {
    color: #2196f3 !important;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.5) !important;
  }
  .theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: rgba(255, 255, 255, 0.12) !important;
  }
}
</style>
