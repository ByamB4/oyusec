<template>
  <v-container>
    <v-row justify="center" class="font-cabin">
      <v-col xs="12" cols="12" sm="12" md="7" lg="5" xl="6">
        <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
          <v-card class="user-bg mt-10" elevation="12" shaped>
            <v-card-title class="justify-center font-press f-18" primary-title
              >[ Нэвтрэх ]</v-card-title
            >
            <v-card-text>
              <v-text-field
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                :loading="form.loading"
                type="email"
                color="white"
                class="mt-5"
                label="Хэрэглэгчийн имэйл"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="form.password"
                :type="passwordShow ? 'text' : 'password'"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.limitPass]"
                :loading="form.loading"
                color="white"
                label="Нууц үг"
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
                >
                  Нэвтрэх
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
      valid: true,
      loading: false,
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
  head: () => ({
    title: "Нэвтрэх",
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
    submit() {
      this.$store.dispatch("user/loginUser", {
        auth: this.$auth,
        form: this.form,
      })
      this.reset()
    },
  },
}
</script>
