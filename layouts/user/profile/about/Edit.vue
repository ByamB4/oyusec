<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="socialSubmit">
    <v-text-field
      v-model="form.github"
      :loading="loading"
      prepend-inner-icon="mdi-github"
      placeholder="https://github.com/"
      label="Github"
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
      v-model="form.inst"
      :loading="loading"
      prepend-inner-icon="mdi-instagram"
      placeholder="https://instagram.com/"
      label="Instagram"
      outlined
      dense
    ></v-text-field>
    <v-btn
      :loading="loading"
      :disabled="!form.valid || loading"
      type="submit"
      elevation="2"
      color="primary"
    >
      <span>Болсон</span>
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
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },
  // created() {
  //   this.profile.socials.forEach((element) => {
  //     this.form[element.type] = element.link
  //   })
  // },
  methods: {
    socialSubmit() {
      this.loading = true
      this.$store.dispatch("user/updateSocial", {
        form: this.form,
      })
      this.reset()
    },
    reset() {
      // this.form = {}
      this.loading = false
      // this.$refs.form.resetValidation()
    },
  },
}
</script>

<style></style>
