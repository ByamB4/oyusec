<template>
  <v-container>
    <v-row class="font-monts" justify="center">
      <v-col cols="11" align="center" class="f-19">
        <div>
          <v-img src="/logo.png" width="100" height="100" alt="oyusec logo" />
          <h2 style="letter-spacing: 0.3px" class="font-press">OyuSec - CTF</h2>
          <span class="f-25 yellow--text">{{ $t("note") }}</span>
        </div>
        <div class="mt-5 text-justify">
          <h2 style="letter-spacing: 0.3px" class="font-press f-15">
            [ {{ $t("about") }} ]
          </h2>
          <p style="line-height: 200%">
            {{ $t("description") }}
          </p>
          <ul class="mt-3 text-justify">
            <li><code>admin@mail.zxc : tmppass123</code></li>
            <li><code>guest@mail.zxc : tmppass123</code></li>
          </ul>
        </div>
        <div class="mt-10 text-justify">
          <h2 style="letter-spacing: 0.3px" class="font-press f-15">
            [ {{ $t("sponsor") }} ]
          </h2>
          <ul style="list-style-type: none" class="mt-3 text-justify">
            <li>
              <v-avatar>
                <img alt="oyutech logo" src="/oyutech.png" />
              </v-avatar>
              <strong>OyuTech</strong>
            </li>
          </ul>
        </div>
        <div class="mt-10 text-justify">
          <h2 style="letter-spacing: 0.3px" class="font-press f-15">
            [ {{ $t("contact") }} ]
          </h2>
          <div class="mt-5 ml-5">
            <v-btn
              v-for="link in links"
              :key="link.icon"
              icon
              class="ml-4"
              :href="link.url"
              target="_blank"
            >
              <v-icon size="40" color="white" v-text="link.icon"></v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        icon: "mdi-facebook",
        url: "https://facebook.com/oyusec/",
      },
      {
        icon: "mdi-github",
        url: "https://github.com/oyusec/",
      },
      {
        icon: "mdi-discord",
        url: "https://discord.gg/9fqVFEBAhv",
      },
      {
        icon: "mdi-twitter",
        url: "https://twitter.com/oyusec",
      },
    ],
  }),
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.index.title,
    }
  },
}
</script>
