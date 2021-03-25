<template>
  <v-container>
    <v-row class="font-exo" align="center" justify="center">
      <v-col cols="12" class="f-19" align="center">
        <v-img src="/logo.png" width="100" height="100" alt="oyusec logo" />
        <h2 style="letter-spacing: 0.3px" class="font-press">OyuSec</h2>
      </v-col>
      <v-col cols="6" class="mt-10 text-justify">
        <h2 class="text-center">
          <v-icon size="35" color="cyan accent-5">mdi-flag-checkered</v-icon>
          {{ $t("challenge") }}
        </h2>
        <span style="line-height: 200%" class="f-19">
          Мэдээллийн аюулгүй байдал, сүлжээний бодлогууд дээр өөрийн ур чадварыг
          шалган оноо цуглуулан бусадтай хөгжөөнт байдлаар бусадтайгаа өрсөлдөх
        </span>
      </v-col>
      <v-col cols="6" class="mt-10 text-justify">
        <h2 class="text-center">
          <v-icon size="35" color="light-blue accent-3"
            >mdi-account-group</v-icon
          >
          {{ $t("community") }}
        </h2>
        <span style="line-height: 200%" class="f-19">
          Бусадтай харилцаа тогтоож, өөрсдийн бодсон бодолт зэргийг хуваалцан
          бие биенийхээ арга туршилгаас суралцах. Асууж тодруулах зүйл гарах үед
          <v-btn link icon href="https://discord.gg/9fqVFEBAhv" target="_blank"
            ><v-icon>mdi-discord</v-icon></v-btn
          >-оор чөлөөтэй харилцана.
        </span>
      </v-col>
      <v-col cols="6" class="mt-10 text-justify">
        <h2 class="text-center">
          <v-icon size="35" color="yellow darken-2">mdi-trophy-outline</v-icon>
          {{ $t("competition") }}
        </h2>
        <span style="line-height: 200%" class="f-19">
          <b>Live</b> тэмцээнд оролцон оноо цуглуулж бусадтай өрсөлдөн ранкаа
          ахиулах боломжтой. Бид тэмцээний үр дүнг өөрсдийн

          <v-btn link icon href="https://discord.gg/9fqVFEBAhv" target="_blank"
            ><v-icon>mdi-facebook</v-icon></v-btn
          >
          хуудсаараа дамжуулан зарлаж байх болно.
        </span>
      </v-col>
      <v-col cols="6" class="mt-10" style="color: #616161">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <h2 class="text-center">
                <v-icon size="35" color="#616161">mdi-book-open-variant</v-icon>
                {{ $t("learn") }}
              </h2>
              <span style="line-height: 200%" class="f-19 text-justify">
                Бид анхлан суралцагчдад, зориулж чиглэл өгөх зорилгоор
                <b>linux</b>, энгийн <b>ctf</b> бодлого, аюулгүй байдлын талаар
                сонирхолтой байдлаар заах болно.
              </span>
            </div>
          </template>
          <span v-text="$t('comingSoon')" />
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$i18n.messages[this.$i18n.locale].pages.index.title,
      meta: [
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Бодлого: Мэдээллийн аюулгүй байдал, сүлжээний бодлогууд дээр өөрийн ур чадварыг шалган оноо цуглуулан бусадтай хөгжөөнт байдлаар бусадтайгаа өрсөлдөх",
        },
      ],
    }
  },
}
</script>
