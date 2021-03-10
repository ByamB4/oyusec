<template>
  <v-row class="mt-2">
    <v-col cols="5">
      <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
        <v-card-text>
          <v-text-field
            v-model="form.content"
            class="mt-2"
            label="Flag content"
            outlined
            dense
          ></v-text-field>
          <v-row justify="end">
            <v-card-actions>
              <v-btn small elevation="2" color="primary" type="submit">
                Нэмэх
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card-text>
      </v-form>
    </v-col>
    <v-col cols="7">
      <v-data-table
        :headers="headers"
        :items="activeChallenge.flags"
        :items-per-page="5"
        loading-text="Түр хүлээнэ үү"
        :footer-props="{ itemsPerPageText: '' }"
      >
        <template #[`item.state`]="{ item }">
          <v-chip small color="primary">
            {{ item.state }}
          </v-chip>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      form: {},
      challenge: {},
      changed: false,
      headers: [
        { text: 'Агуулга', value: 'content', sortable: false },
        { text: 'Засах', value: 'actions', sortable: false },
      ],
      stateItems: ['Ил харагдана', 'Нууцлагдмал'],
    }
  },
  computed: {
    ...mapState({ activeChallenge: (state) => state.admin.activeChallenge }),
  },

  methods: {
    submit() {
      this.$store.dispatch('admin/addFlag', {
        $data: this.form,
      })
      this.reset()
    },
    deleteItem(item) {
      this.$store.dispatch('admin/deleteFlag', {
        $id: item.id,
      })
    },
    reset() {
      this.form = {}
      this.$refs.form.resetValidation()
    },
  },
}
</script>
