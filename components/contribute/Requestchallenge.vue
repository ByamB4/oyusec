<template>
  <v-form
    ref="form"
    v-model="form.valid"
    :disabled="!$auth.loggedIn"
    @submit.prevent="submit"
  >
    <v-card class="user-bg font-exo" dark>
      <v-card-text>
        <v-text-field
          v-model="form.name"
          :label="$t('name')"
          :rules="[rules.required, rules.counter]"
          :counter="25"
          :loading="form.loading"
          placeholder="Миний Нууц Файл"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.category"
          :label="$t('category')"
          :rules="[rules.required, rules.counter]"
          :counter="25"
          :loading="form.loading"
          placeholder="Forensics"
          outlined
          dense
        ></v-text-field>
        <v-textarea
          v-model="form.description"
          :rules="[rules.required]"
          :loading="form.loading"
          placeholder="
            Та текстийн **bold** бас _italic_ болгох боломжтой.
            > Мөн санамж, бичиг зэрэг
            [Татах](https://your-file-end-url.com)
          "
          outlined
          :label="$t('description')"
          auto-grow
        ></v-textarea>
        <v-text-field
          v-model="form.solution"
          :label="$t('solution')"
          :rules="[rules.required]"
          :loading="form.loading"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.flag"
          placeholder="oyusec{.*}"
          :rules="[rules.required]"
          :label="$t('flag')"
          :loading="form.loading"
          outlined
          dense
        ></v-text-field>
        <v-row justify="end">
          <v-card-actions>
            <v-btn
              :loading="form.loading"
              :disabled="!form.valid"
              small
              elevation="2"
              color="primary"
              type="submit"
              v-text="$t('submit')"
            />
          </v-card-actions>
        </v-row>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: "",
      category: "",
      decay: 25,
      description: "",
      minimum: 100,
      value: 1000,
      flag: "",
      solution: "",
      loading: false,
    },
    rules: {
      required: (value) => !!value || "Заавал бөглөх ёстой",
      counter: (value) => value.length <= 25 || "Ихдээ 25 тэмдэгт",
    },
  }),
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$toast.show("Эхлээд нэвтэрнэ үү", {
        icon: "alert-circle",
      })
    }
  },
  methods: {
    reset() {
      this.form.name = ""
      this.form.description = ""
      this.form.value = ""
      this.form.category = ""
      this.form.flag = ""
      this.form.decay = ""
      this.form.minimum = ""
      this.form.solution = ""
      this.form.loading = false
      this.$refs.form.resetValidation()
    },
    async submit() {
      this.form.loading = true
      const { data } = await this.$axios.post("api/challenges/request/", {
        data: this.form,
      })
      if (data.success) {
        this.$toast.success(data.detail, {
          icon: "check-circle",
        })
      } else {
        this.$toast.error(data.detail, {
          icon: "alert-circle",
        })
      }
      this.reset()
    },
  },
}
</script>
