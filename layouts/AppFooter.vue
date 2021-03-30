<template>
  <v-footer app dark padless width="auto" absolute>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="6">
          <v-btn
            v-for="link in links"
            :key="link.icon"
            class="mx-3"
            icon
            :href="link.link"
            rel="noopener"
            target="_blank"
          >
            <v-icon size="24px">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col class="text-right font-monts" cols="6">
          <span class="amber--text darken-4--text">© 2021 OyuTech</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/OyuSec/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/oyusec",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/oyutech/",
      },
      {
        icon: "mdi-discord",
        link: "https://discord.gg/9fqVFEBAhv",
      },
    ],
  }),
}
</script>
