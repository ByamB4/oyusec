<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
    <v-card class="user-bg" elevation="12" shaped>
      <v-card-title
        class="justify-center font-press f-18"
        primary-title
        v-text="$t('createAccount')"
      />
      <v-card-text>
        <v-text-field
          v-model="form.username"
          :rules="[$rules.required, $rules.counter, $rules.letterOnly]"
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
          :rules="[$rules.required, $rules.email]"
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
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[$rules.limitPass]"
          :loading="form.loading"
          :label="$t('password')"
          color="white"
          outlined
          dense
          class="mt-2"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-card-actions class="mt-2">
          <v-btn
            :loading="form.loading"
            :disabled="!form.valid || form.loading"
            rounded
            elevation="2"
            depressed
            block
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
      loading: false,
    },
    showPassword: false,
  }),
  methods: {
    reset() {
      this.form = {
        username: "",
        email: "",
        password: "",
        loading: false,
      };
      this.$refs.form.resetValidation();
    },
    async submit() {
      this.form.loading = true;
      const success = await this.$store.dispatch("user/registerUser", {
        nuxt: this.$nuxt,
        form: this.form,
      });
      this.reset();
      if (success) {
        this.$emit("switch");
      }
    },
  },
};
</script>
<style scoped lang="sass"></style>
