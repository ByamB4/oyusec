<template>
  <div>
    {{ academy }}
    <!-- <div>
      <div v-html="academy.sections[page - 1].content"></div>
      <div v-if="academy.sections[page - 1].question">
        <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
          <v-row align="center">
            <v-col cols="8">
              <v-text-field
                v-model="form.question"
                :rules="[$rules.required]"
                :loading="form.loading"
                :label="academy.sections[page - 1].question"
                color="white"
                class="mt-5"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="4" class="d-flex justify-space-around">
              <v-btn
                :loading="form.loading"
                :disabled="!form.valid || form.loading"
                type="submit"
                elevation="2"
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
              <v-btn
                :disabled="form.loading"
                small
                outlined
                elevation="2"
                color="warning"
              >
                <span v-text="$t('hint')" />
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div> -->
    <!-- <div class="text-center">
      <v-pagination
        v-model="page"
        color="pink"
        :length="academy.sections.length"
        :total-visible="5"
      ></v-pagination>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data: () => ({
    form: {
      question: "",
      loading: false
    },
    page: 1
  }),
  computed: {
    ...mapGetters({
      academy: "academy/getAcademy"
    })
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
