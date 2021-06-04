<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2" align="center">
        <div style="position: sticky !important; top: 20%" class="col-gray-300">
          <div>
            <v-btn icon left @click="addLike">
              <v-icon
                size="25"
                :class="{ liked: wrt.liked }"
                color="grey lighten-1"
                >mdi-heart</v-icon
              >
            </v-btn>
            <span v-text="wrt.likes" />
          </div>
          <div class="mt-10">
            <v-btn icon left>
              <v-icon size="25" color="grey lighten-1">mdi-chat</v-icon>
            </v-btn>
            <span v-text="wrt.comms" />
          </div>
          <div class="mt-10">
            <v-btn icon left>
              <v-icon size="25" color="grey lighten-1">mdi-eye</v-icon>
            </v-btn>
            <span v-text="wrt.views" />
          </div>
        </div>
      </v-col>
      <v-col cols="8" class="challenges">
        <h2 class="font-press" v-text="wrt.name" />
        <div class="d-flex justify-space-between pa-3">
          <div class="d-flex align-center">
            <div>
              <v-avatar>
                <v-img :src="wrt.author.img" :alt="wrt.author.fullname" />
              </v-avatar>
            </div>
            <div class="ml-3">
              <div class="d-flex">
                <router-link
                  class="ml-1 font-weight-bold"
                  :to="{ name: 'user-slug', params: { slug: wrt.author.slug } }"
                  v-text="wrt.author.fullname"
                />
              </div>
              <div class="col-gray-300">
                <span class="ml-1" v-text="wrt.created_date" />
                <span class="ml-1"> • </span>
                <span class="ml-1" v-text="wrt.time + 'мин'" />
              </div>
            </div>
          </div>
        </div>
        <div class="chall" v-html="wrt.content" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData(context) {
    const { id } = context.params;
    await Promise.all([context.store.dispatch("writeup/updateWriteup", id)]);
  },
  computed: {
    ...mapGetters({
      wrt: "writeup/getWriteup",
    }),
  },
  methods: {
    addLike() {
      if (!this.$auth.loggedIn) {
        this.$toast.show("Эхлээд нэвтэрнэ үү", {
          icon: "alert-circle",
        });
        return;
      }
      this.$store.dispatch("writeup/like", {
        wrt: this.wrt,
      });
    },
  },
};
</script>
<style scoped lang="sass">
.v-icon.liked
  color: #e31b23 !important
</style>
