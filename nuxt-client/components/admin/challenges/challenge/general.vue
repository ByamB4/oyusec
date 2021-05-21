<template>
  <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
    <v-card-text>
      <v-text-field
        v-model="form.name"
        :label="$t('name')"
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
        :label="$t('description')"
        class="mt-n2"
        outlined
        auto-grow
      ></v-textarea>
      <v-text-field
        v-model="form.value"
        :label="$t('score')"
        type="number"
        outlined
        hint="Бодлогын эхлэх оноо буюу хэн ч бодоогүй үеийн оноо"
        dense
      ></v-text-field>
      <div v-if="form.type === 'dynamic'">
        <v-text-field
          v-model="form.decay"
          :label="$t('decay')"
          type="number"
          placeholder="30"
          hint="Хүн бодлого бодох үед оноог хэр хэмжээтэй буурахыг тодорхойлно"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="form.minimum"
          :label="$t('minimum_value')"
          type="number"
          hint="Оноо буурсаар эцсийн дүндээ хэд болохыг тодорхойлно"
          outlined
          dense
        ></v-text-field>
      </div>
      <v-select
        v-model="form.state"
        :item-text="form.state"
        :items="stateItems"
        dense
        :label="$t('state')"
        outlined
      >
      </v-select>
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
  </v-form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    changed: false,
    form: {
      name: "",
      state: "Ил харагдана",
      type: "dynamic",
    },
    stateItems: ["Ил харагдана", "Нууцлагдмал"],
  }),
  computed: {
    ...mapState({ challenge: (state) => state.admin.activeChallenge }),
  },

  watch: {
    challenge: {
      immediate: true,
      handler(newVal, oldVal) {
        this.form.type = this.challenge.type;
        this.form.name = this.challenge.name;
        this.form.category = this.challenge.category;
        this.form.state = this.challenge.state;
        this.form.minimum = this.challenge.minimum;
        this.form.decay = this.challenge.decay;
        this.form.description = this.challenge.description;
        this.form.value = this.challenge.value;
        this.form.id = this.challenge.id;
      },
    },
  },

  methods: {
    submit() {
      this.$store.dispatch("admin/updateChallenge", {
        form: this.form,
      });
    },
  },
};
</script>
