<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
    <v-card class="user-bg font-exo" tile>
      <v-card-text>
        <v-text-field
          v-model="form.name"
          :label="$t('name')"
          required
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.category"
          :label="$t('category')"
          outlined
          dense
        ></v-text-field>
        <v-textarea
          v-model="form.description"
          placeholder="
            Та текстийн **bold** бас _italic_ болгох боломжтой.
            > Мөн санамж, бичиг зэрэг
          "
          outlined
          :label="$t('description')"
          auto-grow
        ></v-textarea>
        <v-text-field
          v-model="form.value"
          :label="$t('score')"
          placeholder="1000"
          type="number"
          outlined
          dense
        ></v-text-field>
        <v-select
          v-model="form.state"
          :item-text="form.state"
          :items="form.stateItems"
          :label="$t('state')"
          dense
          outlined
        >
        </v-select>
        <v-text-field
          v-model="form.flag"
          placeholder="flag{.*}"
          :label="$t('flag')"
          outlined
          dense
        ></v-text-field>
        <v-row justify="end">
          <v-card-actions>
            <v-btn
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
      state: "Ил харагдана",
      stateItems: ["Ил харагдана", "Нууцлагдмал"],
    },
  }),
  methods: {
    reset() {
      this.form.name = ""
      this.form.description = ""
      this.form.category = ""
      this.form.value = ""
      this.form.flag = ""
      this.form.state = "Ил харагдана"
      this.$refs.form.resetValidation()
    },

    submit() {
      this.$store.dispatch("admin/addChallenge", {
        $form: this.form,
        $type: "standard",
      })
      this.reset()
    },
  },
}
</script>
