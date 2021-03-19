<template>
  <v-card class="user-bg font-exo" tile>
    <v-card-title>
      <span v-text="$t('all_challenges')" />
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        dense
        append-icon="mdi-magnify"
        :label="$t('search')"
        single-line
        hide-details
      >
      </v-text-field>
    </v-card-title>
    <v-data-table
      :headers="$t('admin.challengesHeaders')"
      :items="challenges"
      :items-per-page="10"
      :search="search"
      :loading-text="$t('loading')"
      :footer-props="{ itemsPerPageText: '' }"
      class="elevation-1"
    >
      <template #top>
        <v-dialog v-model="dialog.show" max-width="300px">
          <v-card class="user-bg">
            <v-card-title
              class="headline justify-center"
              v-text="$t('are_you_sure')"
            />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                small
                text
                @click="dialog.show = false"
                v-text="$t('no')"
              />
              <v-btn
                color="blue darken-1"
                small
                depressed
                @click="deleteConfirm"
                v-text="$t('yes')"
              />
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template #[`item.state`]="{ item }">
        <v-chip small color="purple darken-2" v-text="item.state" />
      </template>

      <template #[`item.type`]="{ item }">
        <v-chip small color="primary" v-text="item.type" />
      </template>

      <template #[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
    search: "",
    dialog: {
      show: false,
      itemID: null,
    },
  }),

  computed: {
    ...mapState({
      challenges: (state) => state.admin.challenges,
    }),
  },

  created() {
    this.$store.dispatch("admin/getChallenges")
  },

  methods: {
    deleteItem(item) {
      this.dialog.itemID = item.id
      this.dialog.show = true
    },
    deleteConfirm() {
      this.$store.dispatch("admin/deleteChallenge", this.dialog.itemID)
      this.dialog.show = false
    },
    editItem(item) {
      this.$store.dispatch("admin/getChallenge", {
        id: item.id,
      })
      this.$store.commit("admin/SET_TAB", 3)
    },
  },
}
</script>
