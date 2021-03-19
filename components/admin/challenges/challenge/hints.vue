<template>
  <v-row class="mt-2">
    <v-col cols="5">
      <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
        <v-card-text>
          <v-textarea
            v-model="form.content"
            class="mt-n2"
            outlined
            :label="$t('content')"
            auto-grow
          ></v-textarea>
          <v-text-field
            v-model="form.value"
            :label="$t('cost')"
            type="number"
            outlined
            dense
          ></v-text-field>
          <v-select
            v-model="form.state"
            :item-text="form.state"
            :items="stateItems"
            :label="$t('state')"
            dense
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
    </v-col>
    <v-col cols="7">
      <v-data-table
        :headers="$t('admin.challengeEditHintHeaders')"
        :items="activeChallenge.hints"
        :items-per-page="5"
        :loading-text="$t('loading')"
        :footer-props="{ itemsPerPageText: '' }"
      >
        <template #[`item.state`]="{ item }">
          <v-chip small color="primary">
            {{ item.state }}
          </v-chip>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="deleteHint(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      form: {
        state: "Ил харагдана",
      },
      hints: {},
      challenge: {},
      changed: false,
      stateItems: ["Ил харагдана", "Нууцлагдмал"],
    }
  },
  computed: {
    ...mapState({ activeChallenge: (state) => state.admin.activeChallenge }),
  },

  methods: {
    submit() {
      this.$store.dispatch("admin/addHint", {
        $data: this.form,
      })
      this.reset()
    },
    deleteHint(item) {
      this.$store.dispatch("admin/deleteHint", {
        $id: item.id,
      })
    },
    reset() {
      this.form = {
        state: "Ил харагдана",
      }
      this.$refs.form.resetValidation()
    },
  },
}
</script>
