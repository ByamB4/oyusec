<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
    <v-card class="user-bg" elevation="12" shaped>
      <v-card-title class="justify-center font-press f-18" primary-title
        >[ {{ $t("createAccount") }} ]</v-card-title
      >
      <v-card-text>
        <v-text-field
          v-model="form.username"
          :rules="[rules.required, rules.counter, rules.letterOnly]"
          :counter="25"
          :loading="form.loading"
          :label="$t('username')"
          color="white"
          class="mt-5"
          maxlength="25"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          :rules="[rules.required, rules.email]"
          :loading="form.loading"
          color="white"
          :label="$t('email')"
          type="email"
          outlined
          dense
          class="mt-2"
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          :type="passwordShow ? 'text' : 'password'"
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.limitPass]"
          :loading="form.loading"
          :label="$t('password')"
          color="white"
          outlined
          dense
          class="mt-2"
          @click:append="passwordShow = !passwordShow"
        ></v-text-field>
        <v-card-actions class="mt-2">
          <v-btn
            :loading="form.loading"
            :disabled="!form.valid"
            rounded
            elevation="2"
            depressed
            block
            color="primary"
            type="submit"
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
      username: "",
      password: "",
      email: "",
      valid: true,
      loading: false,
    },
    passwordShow: false,
    rules: {
      required: (value) => !!value || "Заавал бөглөх ёстой",
      counter: (value) => value.length <= 25 || "Max 25 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || "Дахин шалгана уу"
      },
      letterOnly: (value) => {
        const pattern = /^[A-Za-z0-9]+$/
        return pattern.test(value) || "Зөвхөн тэмдэгт оруулна уу"
      },
      limitPass: (value) => value.length >= 8 || "8 тэмдэгтээс их байх ёстой",
    },
  }),
  methods: {
    reset() {
      this.form = {
        username: "",
        email: "",
        password: "",
        loading: false,
        valid: true,
      }
      this.$refs.form.resetValidation()
    },
    async submit() {
      this.form.loading = true
      const success = await this.$store.dispatch("user/registerUser", {
        nuxt: this.$nuxt,
        form: this.form,
      })
      this.reset()
      if (success) {
        this.$emit("switch")
      }
    },
  },
}
</script>
