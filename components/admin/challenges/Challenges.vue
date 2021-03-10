<template>
  <v-card class="user-bg" tile>
    <v-card-title>
      <span class="font-monts">Нийт бодлогууд</span>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        dense
        append-icon="mdi-magnify"
        label="Хайх"
        single-line
        hide-details
      >
      </v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="challenges"
      :items-per-page="10"
      :search="search"
      loading-text="Түр хүлээнэ үү"
      :footer-props="{ itemsPerPageText: 'Нэг хуудсанд мөр' }"
      class="elevation-1"
    >
      <template #top>
        <v-dialog v-model="dialog.show" max-width="300px">
          <v-card class="user-bg">
            <v-card-title class="headline justify-center"
              >Та итгэлтэй байна уу ?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                small
                text
                @click="dialog.show = false"
                >Үгүй</v-btn
              >
              <v-btn
                color="blue darken-1"
                small
                depressed
                @click="deleteConfirm"
                >Тийм</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template #[`item.state`]="{ item }">
        <v-chip small color="purple darken-2">
          {{ item.state }}
        </v-chip>
      </template>

      <template #[`item.type`]="{ item }">
        <v-chip small color="primary">
          {{ item.type }}
        </v-chip>
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
    headers: [
      { text: "Нэр", value: "name", sortable: false },
      { text: "Ангилал", value: "category", sortable: false },
      { text: "Оноо", value: "value" },
      { text: "Төрөл", value: "type", sortable: false },
      { text: "Төлөв", value: "state", sortable: false },
      { text: "Үйлдэл:", value: "actions", sortable: false },
    ],
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
