<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
    <v-card class="user-bg" elevation="12" shaped>
      <v-card-title class="justify-center font-press f-18" primary-title
        >[ {{ $t("login") }} ]</v-card-title
      >
      <v-card-text>
        <v-text-field
          v-model="form.email"
          :rules="[rules.required, rules.email]"
          :loading="form.loading"
          :label="$t('email')"
          type="email"
          color="white"
          class="mt-5"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          :type="passwordShow ? 'text' : 'password'"
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.limitPass]"
          :loading="form.loading"
          :label="$t('password')"
          :hint="$t('weNeverAbleToSeeYourPassword')"
          color="white"
          outlined
          dense
          class="mt-2 col-white"
          @click:append="passwordShow = !passwordShow"
        ></v-text-field>
        <v-card-actions class="mt-2">
          <v-btn
            :loading="form.loading"
            :disabled="!form.valid"
            type="submit"
            block
            rounded
            elevation="2"
            color="primary"
            v-text="$t('submit')"
          />
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    form: {
      loading: false,
      email: "",
      password: "",
      valid: true,
    },
    passwordShow: false,
    rules: {
      required: (value) => !!value || "Заавал бөглөх ёстой",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || "Дахин шалгана уу"
      },
      limitPass: (value) => value.length >= 8 || "8 тэмдэгтээс их байх ёстой",
    },
  }),
  methods: {
    reset() {
      this.form = {
        email: "",
        password: "",
        loading: false,
      }
      this.$refs.form.resetValidation()
    },
    async submit() {
      this.form.loading = true
      await this.$store.dispatch("user/loginUser", {
        auth: this.$auth,
        form: this.form,
      })
      this.reset()
    },
  },
}
</script>
