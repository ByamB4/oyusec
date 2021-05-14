<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="socialSubmit">
    <v-text-field
      v-model="form.fullname"
      :loading="loading"
      :placeholder="profile.fullname"
      :label="$t('fullName')"
      :rules="[$rules.counter]"
      prepend-inner-icon="mdi-account"
      counter="25"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="form.github"
      prepend-inner-icon="mdi-github"
      label="Github"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="form.inst"
      prepend-inner-icon="mdi-instagram"
      label="Instagram"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="form.face"
      :loading="loading"
      prepend-inner-icon="mdi-facebook"
      label="Facebook"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="form.twitter"
      :loading="loading"
      prepend-inner-icon="mdi-twitter"
      label="Twitter"
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
      form: {},
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      profile: "user/getProfile"
    })
  },
  created() {
    this.profile.socials.forEach((el) => {
      this.form[el.type] = el.handle
    })
    this.form.fullname = this.profile.fullname
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
