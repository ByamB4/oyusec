<template>
  <v-row class="mt-5">
    <v-col cols="6">
      <v-btn
        small
        text
        color="blue-grey lighten-3"
        class="no-upper"
        @click="soon"
        v-text="$t('forgetYourPassword')"
      />
    </v-col>
    <v-col cols="6" align="end">
      <v-btn
        small
        text
        class="no-upper"
        color="light-green accent-3"
        @click="$emit('switch')"
      >
        <span v-if="login" v-text="$t('dontHaveAnAccount')" />
        <span v-else v-text="$t('haveAnAccount')" />
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    login: {
      type: Boolean,
      default: false,
    },
  },
  // props: [
  //   "login"],
  methods: {
    soon() {
      this.$toast.success("Soon2", { icon: "check-circle" })
    },
  },
}
</script>
