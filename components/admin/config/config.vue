<template>
  <v-form @submit.prevent="onSubmit">
    <v-card class="user-bg" elevation="12">
      <v-card-text>
        <v-text-field
          v-model="form.name"
          placeholder="OyuSec"
          hint="Зохион байгуулж байгаа тэмцээний нэр"
          label="Тэмцээний нэр"
          outlined
          dense
        ></v-text-field>
        <v-textarea
          v-model="form.description"
          outlined
          label="Тэмцээний тайлбар"
          hint="Зохион байгуулж байгаа тэмцээний тайлбар, нэмэлт мэдээлэл"
          auto-grow
        ></v-textarea>
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
    form: {},
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch("admin/setConfig", { form: this.form })
    },
  },
}
</script>

<style></style>
