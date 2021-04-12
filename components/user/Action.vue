<template>
  <div>
    <!-- <v-row v-if="$auth.loggedIn && guest.id === $auth.user.id"> -->
    <v-row>
      <v-col cols="6">
        <v-btn block color="indigo" class="mt-5" @click="$emit('toggleEdit')">
          <template v-if="!edit">
            <span v-text="$t('edit')" />
            <v-icon right> mdi-pencil </v-icon>
          </template>
          <template v-else>
            Тойм
            <v-icon right>mdi-email-newsletter</v-icon>
          </template>
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn block color="pink" class="mt-5" @click="logout">
          <span v-text="$t('logout')" />
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- <v-row v-else-if="contains(guest.id)">
      <v-col cols="12">
        <v-btn
          block
          color="primary"
          class="mt-5"
          @click="reportUser('unReport')"
        >
          <v-icon size="22" left>mdi-account-check</v-icon>
          Мэдэгдэл Цуцлах
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else-if="!contains(guest.id)">
      <v-col cols="12">
        <v-btn block color="pink" class="mt-5" @click="reportUser('report')">
          <v-icon left>mdi-alert</v-icon>
          Мэдэгдэх
        </v-btn>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: {
    edit: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },
  // mounted() {
  //   this.$store.dispatch("reports/getData")
  // },
  methods: {
    async logout() {
      this.$auth.logout()
      await this.$auth.logout()
      await this.$store.commit("competition/SET_SOLVES", [])
      await this.$store.commit("challenge/SET_SOLVES", [])
      // this.$store.dispatch("user/getGuest", { id: this.$route.params.id })
      // if (this.edit === true) {
      //   this.$emit("toggleEdit")
      // }
    },
    async reportUser(type) {
      if (!this.$auth.loggedIn) {
        this.$toast.show("Эхлээд нэвтэрнэ үү", {
          icon: "alert-circle",
        })
      } else {
        const { data } = await this.$axios.post("api/v1/report/", {
          data: {
            _to: this.guest.id,
            _from: this.$auth.user.id,
            _type: type,
          },
        })
        if (data.success) {
          if (type === "report") {
            this.$store.commit("reports/ADD_REPORT", {
              guestID: this.guest.id,
              profileID: this.$auth.user.id,
            })
          } else {
            this.$store.commit("reports/REMOVE_REPORT", {
              guestID: this.guest.id,
              profileID: this.$auth.user.id,
            })
          }
        }
      }
    },
    contains(val) {
      return this.reports.filter((report) => report === val).length > 0
    },
  },
}
</script>
