<template>
  <v-form
    ref="form"
    v-model="form.valid"
    :disabled="!$auth.loggedIn"
    @submit.prevent="submit"
  >
    <v-card class="user-bg font-exo" dark>
      <v-card-text>
        <v-textarea
          v-model="form.solution"
          :rules="[rules.required]"
          :loading="form.loading"
          height="400"
          placeholder="Та текстийн **bold** бас _italic_ болгох боломжтой
> Мөн санамж, бичиг зэрэг
[Татах](https://yourfile.zip)
![Зураг](https://yourimage.png)"
          outlined
          :label="$t('solution')"
          auto-grow
        ></v-textarea>
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
import { mapGetters } from "vuex"

export default {
  data: () => ({
    form: {
      solution: "",
      loading: false,
    },
    rules: {
      required: (value) => !!value || "Заавал бөглөх ёстой",
    },
  }),
  computed: {
    ...mapGetters({
      challenge: "writeup/getChallenge",
    }),
  },
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$toast.show("Эхлээд нэвтэрнэ үү", {
        icon: "alert-circle",
      })
    }
  },
  methods: {
    reset() {
      this.form.solution = ""
      this.form.loading = false
      this.$refs.form.resetValidation()
    },
    async submit() {
      this.form.loading = true
      await this.$store.dispatch("writeup/addWriteup", {
        $id: this.challenge.id,
        $data: this.form.solution,
      })
      this.reset()
    },
  },
}
</script>
