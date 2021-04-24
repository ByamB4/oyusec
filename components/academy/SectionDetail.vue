<template>
  <v-container>
    <div v-if="section">
      <v-row cols="12">
        <div class="px-5 challenges">
          <div class="chall f-16 text-justify">
            <div v-html="section.content" />
          </div>
        </div>
      </v-row>
      <template v-if="section.haveQuestion" cols="12">
        <v-dialog v-model="dialog.show" max-width="300px">
          <v-card class="user-bg font-exo">
            <v-card-title class="headline justify-center">
              <v-icon color="white">mdi-help-circle-outline</v-icon>
            </v-card-title>
            <v-card-text class="d-flex justify-center">
              <p class="f-16 text-justify" v-text="section.hint" />
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
          <v-container>
            <v-row class="mt-3">
              <v-col cols="8">
                <v-text-field
                  v-model="form.question"
                  :loading="form.loading"
                  :label="section.question"
                  :disabled="section.completed"
                  color="white"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn
                  :loading="form.loading"
                  :disabled="!form.valid || form.loading || section.completed"
                  type="submit"
                  block
                  elevation="2"
                  color="success"
                >
                  <span v-if="section.completed" v-text="$t('solved')" />
                  <span v-else v-text="$t('submit')" />
                  <template #loader>
                    <span class="custom-loader">
                      <v-icon light>mdi-cached</v-icon>
                    </span>
                  </template>
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn
                  :disabled="form.loading"
                  outlined
                  block
                  elevation="2"
                  color="warning"
                  class="bg-transparent"
                  @click="dialog.show = true"
                >
                  <span v-text="$t('hint')" />
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </template>
      <template v-else>
        <v-row>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn
              :loading="form.loading"
              :disabled="section.completed"
              color="success"
              outlined
              @click="submitComplete"
            >
              <span class="font-weight-bold" v-text="$t('markAsComplete')" />
              <v-icon right> mdi-check-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      dialog: {
        show: false
      },
      form: {
        question: "",
        loading: false,
        valid: true
      },
      page: 0
    }
  },
  computed: {
    ...mapGetters({
      section: "academy/getSection"
    })
  },
  methods: {
    reset() {
      this.form = {
        question: "",
        loading: false,
        valid: true
      }
      this.$refs.form.resetValidation()
    },
    submit() {
      this.form.loading = true
      this.$store.dispatch("academy/sectionPost", {
        id: this.section.id,
        form: this.form
      })
      this.reset()
    },
    submitComplete() {
      this.form.loading = true
      this.$store.dispatch("academy/sectionPost", {
        id: this.section.id
      })

      this.form.loading = false
    }
  }
}
</script>

<style lang="sass">
@import "~vuetify/src/styles/styles.sass"
.v-pagination .v-pagination
  &__navigation
    background-color: map-get($blue, darken-3) !important
    .v-icon
      color: #fff !important
  &__item
    background-color: transparent !important
    color: $gray-300 !important
    &--active
      background-color: map-get($pink, base) !important
</style>
