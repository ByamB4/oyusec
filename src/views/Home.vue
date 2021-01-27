<style lang="sass">
.v-expansion-panel-header
  height: 10px !important
</style>

<template>
  <v-container class="mt-10">
    <v-row align="center">
      <v-col>
        <v-window>
          <v-window-item>
            <v-card color="transparent">
              <v-card-text class="font-monts">
                <v-row class="mb-4 f-20" align="center">
                  <v-avatar size="50" class="mr-4">
                    <v-img
                      width="50"
                      height="50"
                      src="https://avatars.githubusercontent.com/u/77679907?s=460&u=94d68b1e26f6b731c4334cd44e7ba3eea067d157&v=4"
                    />
                  </v-avatar>
                  <strong class="f-25">Хувилбар 0.1 </strong>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-row>

                <p class="f-19" style="line-height: 200%;">
                  Бид OyuSec - ийн хамгийн анхны хувилбар болох 1 - ийг
                  танилцуулж байна. Тун удахгүй бусад хэсгүүд засагдаад явах
                  болно.
                </p>
                <div class="text-center mt-10 contact">
                  <p class="f-19">
                    Бидэнтэй нэгдээрэй
                  </p>
                  <v-btn
                    icon
                    class="ml-5"
                    v-for="link in links"
                    :key="link.icon"
                    :href="link.url"
                    target="_blank"
                  >
                    <v-icon size="50" v-text="link.icon"></v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiFacebook, mdiDiscord, mdiGithub } from "@mdi/js";

export default {
  data: () => ({
    links: [
      {
        icon: mdiFacebook,
        url: "https://facebook.com/oyusec/",
      },
      {
        icon: mdiGithub,
        url: "https://github.com/oyusec/",
      },
      {
        icon: mdiDiscord,
        url: "https://discord.gg/9fqVFEBAhv",
      },
    ],
  }),

  mounted() {
    this.$store.commit("SET_LOADING", false);
  },
};
</script>
