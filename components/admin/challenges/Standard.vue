<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
    <v-card class="user-bg" tile>
      <v-card-text>
        <v-text-field
          v-model="form.name"
          label="Бодлогын нэр"
          required
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.category"
          label="Бодлогын төрөл"
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
          label="Бодлогын тайлбар"
          auto-grow
        ></v-textarea>
        <v-text-field
          v-model="form.value"
          label="Бодлогын оноо"
          placeholder="1000"
          type="number"
          outlined
          dense
        ></v-text-field>
        <v-select
          v-model="form.state"
          :item-text="form.state"
          :items="form.stateItems"
          dense
          label="Бодлогын төлөв"
          outlined
        >
        </v-select>
        <v-text-field
          v-model="form.flag"
          placeholder="flag{.*}"
          label="Бодлогын хариу"
          outlined
          dense
        ></v-text-field>
        <v-row justify="end">
          <v-card-actions>
            <v-btn small elevation="2" color="primary" type="submit">
              Болсон
            </v-btn>
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
