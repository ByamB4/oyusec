<template>
  <v-container>
    <v-row class="font-cabin">
      <v-col xs="12" cols="12" sm="12" md="5" lg="5" xl="6">
        <v-sheet rounded elevation="5" class="bg-dark-1">
          <v-row class="bg-blue mx-0" align="center">
            <v-col cols="2">
              <v-icon v-text="mdiAccountCircle" size="35"> </v-icon>
            </v-col>
            <v-col cols="10">
              <h3>Хэрэглэгчийн мэдээлэл</h3>
            </v-col>
          </v-row>
          <v-row class="mx-1 mt-5">
            <v-col cols="12">
              <h4 class="d-inline">Хэрэглэгчийн нэр</h4>
              <span class="text--secondary f-13 ml-3"
                >(Зөвхөн нэг удаа солих эрхтэй)</span
              >
              <v-text-field
                dense
                color="white"
                outlined
                class="mt-3"
                :label="data.username"
              ></v-text-field>
              <h4 class="mt-n3">Бүтэн нэр</h4>
              <v-text-field
                dense
                color="white"
                outlined
                class="mt-3"
                :label="data.fullname"
              ></v-text-field>
              <h4 class="mt-n3">Харьяа</h4>
              <v-select
                outlined
                dense
                class="mt-3"
                :label="data.region"
                :items="regions"
              ></v-select>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col xs="12" cols="12" sm="12" md="7" lg="7" xl="6">
        <v-sheet
          rounded
          elevation="5"
          :class="{ 'mt-2': $vuetify.breakpoint.smAndDown }"
        >
          <Challs />
        </v-sheet>
        <v-sheet rounded elevation="5" class="mt-5">
          <Rating />
        </v-sheet>
        <v-sheet rounded class="mt-5">
          <Action />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { mdiAccountCircle } from "@mdi/js";

export default {
  data() {
    return {
      regions: ["ШУТИС", "ШУТИС-МХТС", "Ажилчин", "МУИС", "Бусад"],
      mdiAccountCircle: mdiAccountCircle,
      url: `profile/${this.$route.params.slug}`,
      edit: false,
      data: {},
      loading: true,
    };
  },

  components: {
    Challs: () => import("./Challs"),
    Rating: () => import("./Rating"),
    Action: () => import("./Action"),
  },

  computed: {
    ...mapState(["isLogged"]),
    ...mapState(["user"]),
  },

  created() {
    this.isUser();
  },

  methods: {
    async isUser() {
      const resp = await this.$api.get(this.url);
      if (this.isLogged && resp.data.username == this.user.username) {
        this.edit = true;
      } else {
        this.edit = false;
      }
      this.data = resp.data;
      console.log(resp.data);
      this.loading = false;
    },
  },
};
</script>
