<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="socialSubmit">
    <v-text-field
      v-model="form.fullname"
      :loading="loading"
      :placeholder="profile.fullname"
      :label="$t('fullName')"
      :rules="[$rules.counter]"
      counter="25"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="form.username"
      readonly
      disabled
      :label="$t('username')"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="form.email"
      :loading="loading"
      :placeholder="profile.email"
      :label="$t('email')"
      :rules="[$rules.email]"
      outlined
      dense
    ></v-text-field>
    <v-btn
      :loading="loading"
      :disabled="!form.valid || loading"
      type="submit"
      elevation="2"
      color="primary"
      submit
      small
    >
      <span v-text="$t('submit')" />

      <template #loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      form: {
        username: "",
        fullname: "",
        email: ""
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      profile: "user/getProfile"
    })
  },
  created() {
    this.form.username = this.profile.username
    this.form.fullname = this.profile.fullname
    this.form.email = this.profile.email
  },
  methods: {
    socialSubmit() {
      this.loading = true
      this.$store.dispatch("user/updateSocial", {
        form: this.form
      })
      this.reset()
    },
    reset() {
      // this.form = {}
      this.loading = false
      // this.$refs.form.resetValidation()
    }
  }
}
</script>

<style></style>
