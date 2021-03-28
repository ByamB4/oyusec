<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
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
          v-model="form.value"
          :label="$t('score')"
          :loading="form.loading"
          placeholder="1000"
          type="number"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.decay"
          :label="$t('decay')"
          :loading="form.loading"
          type="number"
          placeholder="25"
          hint="Хүн бодлого бодох үед оноог хэр хэмжээтэй буурахыг тодорхойлно"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.minimum"
          :label="$t('minimum_value')"
          :loading="form.loading"
          placeholder="100"
          type="number"
          hint="Оноо буурсаар эцсийн дүндээ хэд болохыг тодорхойлно"
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
      decay: "",
      description: "",
      minimum: "",
      value: "",
      flag: "",
      loading: false,
    },
    rules: {
      required: (value) => !!value || "Заавал бөглөх ёстой",
      counter: (value) => value.length <= 25 || "Ихдээ 25 тэмдэгт",
    },
  }),
  methods: {
    reset() {
      this.form.name = ""
      this.form.description = ""
      this.form.value = ""
      this.form.category = ""
      this.form.flag = ""
      this.form.decay = ""
      this.form.minimum = ""
      this.$refs.form.resetValidation()
    },

    submit() {
      this.$toast.success("Удахгүй шинэчлэгдэнэ :')", { icon: "check-circle" })
      // this.$store.dispatch("admin/addChallenge", {
      //   $form: this.form,
      //   $type: "dynamic",
      // })
      this.reset()
    },
  },
}
</script>
