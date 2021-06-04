<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
    <v-card class="user-bg font-exo">
      <v-card-text>
        <v-text-field
          v-model="form.name"
          :label="$t('name')"
          :rules="[$rules.required, $rules.counter]"
          :counter="25"
          :loading="form.loading"
          :placeholder="$t('exFileName')"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.category"
          :label="$t('category')"
          :rules="[$rules.required, $rules.counter]"
          :counter="25"
          :loading="form.loading"
          :placeholder="$t('exCategory')"
          outlined
          dense
        ></v-text-field>
        <v-textarea
          v-model="form.description"
          :rules="[$rules.required]"
          :loading="form.loading"
          :placeholder="$t('exDescription')"
          outlined
          :label="$t('description')"
          auto-grow
        ></v-textarea>
        <v-text-field
          v-model="form.solution"
          :label="$t('solution')"
          :rules="[$rules.required]"
          :loading="form.loading"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.flag"
          :placeholder="$t('exFlag')"
          :rules="[$rules.required]"
          :label="$t('flag')"
          :loading="form.loading"
          outlined
          dense
        ></v-text-field>
        <v-row justify="end">
          <v-card-actions>
            <v-btn
              :loading="form.loading"
              :disabled="!form.valid || form.loading"
              small
              elevation="2"
              color="primary"
              type="submit"
            >
              <span v-text="$t('submit')" />
              <template #loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
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
      name: "",
      category: "",
    },
  }),
  methods: {
    reset() {
      this.form = {
        name: "",
        category: "",
        solution: "",
        flag: "",
        description: "",
        loading: false,
      };
      this.$refs.form.resetValidation();
    },
    async submit() {
      this.form.loading = true;
      const { data } = await this.$axios.post("api/challenges/request/", {
        data: this.form,
      });
      if (data.success) {
        this.$toast.success(data.detail, {
          icon: "check-circle",
        });
      } else {
        this.$toast.error(data.detail, {
          icon: "alert-circle",
        });
      }
      this.reset();
    },
  },
};
</script>
