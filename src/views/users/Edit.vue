<template>
  <v-container>
    <v-form
      v-model="valid"
      @submit.prevent="editSubmit"
      ref="form"
      lazy-validation
    >
      <v-row class="font-cabin">
        <v-col cols="6">
          <v-sheet rounded elevation="5" class="bg-dark-1">
            <v-row class="bg-blue mx-0" align="center">
              <v-col cols="1">
                <v-icon v-text="icons.mdiAccountCircle" size="35"> </v-icon>
              </v-col>
              <v-col cols="11">
                <h3>Хэрэглэгчийн мэдээлэл {{ user.username }}</h3>
              </v-col>
            </v-row>
            <v-row class="mx-1 mt-5">
              <v-col cols="12">
                <h4 class="d-inline">Хэрэглэгчийн нэр</h4>
                <span class="text--secondary f-13 ml-3"
                  >(Зөвхөн нэг удаа солих эрхтэй)</span
                >
                <v-text-field
                  v-model="edit.username"
                  :label="edit.username"
                  :rules="[rules.counter, rules.letterOnly]"
                  dense
                  color="white"
                  outlined
                  class="mt-3"
                  maxlength="25"
                ></v-text-field>
                <h4 class="mt-n3">Бүтэн нэр</h4>
                <v-text-field
                  v-model="edit.fullname"
                  :label="edit.fullname"
                  :rules="[rules.counter, rules.letterOnly]"
                  dense
                  color="white"
                  outlined
                  class="mt-3"
                  maxlength="25"
                ></v-text-field>
                <h4 class="mt-n3">Харьяа</h4>
                <v-select
                  :items="regions"
                  :label="edit.region"
                  outlined
                  dense
                  class="mt-3"
                ></v-select>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet
            rounded
            elevation="5"
            :class="{ 'mt-2': $vuetify.breakpoint.smAndDown }"
            class="bg-dark-1"
          >
            <v-row class="bg-blue mx-0" align="center">
              <v-col cols="1">
                <v-icon v-text="icons.mdiHeart" size="35"> </v-icon>
              </v-col>
              <v-col cols="11">
                <h3>Сошиал хаяг</h3>
              </v-col>
            </v-row>
            <v-row class="mx-1 mt-5">
              <v-col cols="12">
                <v-text-field
                  :hint="'https://instagram.com/' + edit.insta_link"
                  :rules="[rules.letterOnly]"
                  v-model="edit.insta_link"
                  dense
                  outlined
                  class="mt-2"
                  color="white"
                >
                  <template v-slot:label>
                    <v-icon v-text="icons.mdiInstagram" size="22"> </v-icon>
                    <span class="ml-3">{{ links.insta_link }}</span>
                  </template>
                </v-text-field>
                <v-text-field
                  :hint="'https://facebook.com/' + edit.facebook_link"
                  :rules="[rules.letterOnly]"
                  v-model="edit.facebook_link"
                  dense
                  outlined
                  class="mt-2"
                  color="white"
                >
                  <template v-slot:label>
                    <v-icon v-text="icons.mdiFacebook" size="22"> </v-icon>
                    <span class="ml-3">{{ links.facebook_link }}</span>
                  </template>
                </v-text-field>
                <v-text-field
                  :hint="'https://github.com/' + edit.github_link"
                  :rules="[rules.letterOnly]"
                  v-model="edit.github_link"
                  dense
                  outlined
                  class="mt-2"
                  color="white"
                >
                  <template v-slot:label>
                    <v-icon v-text="icons.mdiGithub" size="22"> </v-icon>
                    <span class="ml-3">{{ links.github_link }}</span>
                  </template>
                </v-text-field>
                <v-text-field
                  :hint="'https://www.linkedin.com/in/' + edit.linkedin_link"
                  :rules="[rules.letterOnly]"
                  v-model="edit.linkedin_link"
                  dense
                  outlined
                  class="mt-2"
                  color="white"
                >
                  <template v-slot:label>
                    <v-icon v-text="icons.mdiLinkedin" size="22" />
                    <span class="ml-3">{{ links.linkedin_link }}</span>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet rounded class="mt-5 bg-dark">
            <v-row class="mx-1">
              <v-col cols="12" align="right">
                <v-btn
                  color="success"
                  depressed
                  small
                  v-if="canEdit"
                  type="submit"
                  :disabled="!valid"
                >
                  <v-icon left v-text="icons.mdiCheckboxMarkedCircle"> </v-icon>
                  Болсон
                </v-btn>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import {
  mdiAccountCircle,
  mdiPencil,
  mdiInstagram,
  mdiFacebook,
  mdiGithub,
  mdiLinkedin,
  mdiCheckboxMarkedCircle,
  mdiHeart,
} from "@mdi/js";

export default {
  data() {
    return {
      edit: {
        username: "",
        fullname: "",
        region: "",
        insta_link: "",
        facebook_link: "",
        github_link: "",
        linkedin_link: "",
      },
      regions: ["ШУТИС", "ШУТИС-МХТС", "Ажилчин", "МУИС", "Бусад"],
      valid: true,
      icons: {
        mdiAccountCircle: mdiAccountCircle,
        mdiPencil: mdiPencil,
        mdiFacebook: mdiFacebook,
        mdiInstagram: mdiInstagram,
        mdiGithub: mdiGithub,
        mdiHeart: mdiHeart,
        mdiLinkedin: mdiLinkedin,
        mdiCheckboxMarkedCircle: mdiCheckboxMarkedCircle,
      },
      url: `profile/${this.$route.params.slug}`,
      canEdit: false,
      data: {},
      links: {},
      loading: true,
      rules: {
        required: (value) => !!value || "Заавал бөглөх ёстой",
        counter: (value) => value.length <= 25 || "Ихдээ 25 тэмдэгт",
        letterOnly: (value) => {
          const pattern = /^[A-Za-z0-9]+$/;
          return pattern.test(value) || "Зөвхөн тэмдэгт оруулна уу";
        },
        passMatch: () => this.pass1 === this.pass2 || "Нууц үг таарахгүй байна",
        limitPass: (value) => value.length >= 8 || "8 тэмдэгтээс их байх ёстой",
      },
    };
  },

  computed: {
    ...mapState(["isLogged"]),
    ...mapState(["user"]),
  },

  created() {
    this.isUser();
    this.getLinks();
  },

  methods: {
    async isUser() {
      const resp = await this.$api.get(this.url);
      if (this.isLogged && resp.data.username == this.user.username) {
        this.canEdit = true;
      } else {
        this.canEdit = false;
      }
      this.data = resp.data;
      this.edit.username = resp.data.username;
      this.edit.fullname = resp.data.fullname;
      this.edit.region = resp.data.region;
      this.loading = false;
    },
    async getLinks() {
      const resp = await this.$api.get(
        `profile/${this.$route.params.slug}/links`
      );
      this.edit.insta_link = resp.data.insta_link;
      this.edit.facebook_link = resp.data.facebook_link;
      this.edit.github_link = resp.data.github_link;
      this.edit.facebook_link = resp.data.facebook_link;
      this.links = resp.data;
    },
    async editSubmit() {
      const resp = await this.$api.post(
        `profile/${this.$route.params.slug}/edit`,
        this.edit,
        { headers: { Authorization: "JWT " + this.$store.state.token } }
      );
      console.log(resp.data);
    },
  },
};
</script>
