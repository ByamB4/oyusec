<template>
  <v-row class="ma-10 d-flex justify-space-between" align="center">
    <v-col cols="5">
      <div class="font-moderno text-6lg">
        <span
          >Oyu

          <span class="brand ml-n3">Security</span>
        </span>
      </div>
      <div class="mt-10 font-ubunto">
        <p class="text-xl leading-8 text-justify">
          Make it better place to learn, practice, compete in security field in
          Mongolia 🇲🇳
        </p>
      </div>
    </v-col>
    <v-col cols="5">
      <v-row justify="center">
        <v-col v-for="_ in nums" :key="_.title" cols="6">
          <div>
            <h1>
              {{ _.value }}
              <v-chip color="primary" small class="white--text">demo</v-chip>
            </h1>
            <span
              class="opacity-50 font-light text-uppercase"
              v-text="_.title"
            />
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="mt-5">
      <div>
        <h1 class="text-center font-normal">What is OyuSec ?</h1>
        <div
          style="
            margin: 0 auto;
            width: 180px;
            left: 50% !important;
            height: 8px;
            background: #0e87d8;
            border-radius: 50px;
          "
        ></div>
      </div>
      <v-row class="mt-5">
        <v-col
          v-for="_ in apps"
          :key="_.name"
          cols="4"
          class="d-flex justify-center"
        >
          <v-card min-height="300" max-width="300" class="rounded-xl">
            <div class="d-flex justify-center pt-5">
              <v-icon size="75" :color="_.color" v-text="_.icon" />
            </div>
            <div>
              <h2 class="text-center" v-text="_.name" />
            </div>
            <v-card-text
              class="opacity-70 text-center text-lg"
              v-text="_.description"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    apps: [
      {
        name: "Competition",
        icon: "mdi-trophy",
        color: "pink",
        description:
          "You can participate in competitions, collect points and compete with others to improve your rank. We will announce the results of the competition on our website.",
      },
      {
        name: "Practice",
        icon: "mdi-sword",
        color: "cyan accent-3",
        description:
          "Test your skills on information security and networking policies, score points and compete with others in a fun way.",
      },
      {
        name: "Academy",
        icon: "mdi-school-outline",
        color: "light-green accent-3",
        description:
          "We will teach beginners in an interesting way to learn about cybersecurity-related things, simple CTF challenges, guides, Linux operation systems, etc.",
      },
    ],
    nums: [
      {
        title: "REGISTERED USERS",
        value: "238",
      },
      {
        title: "Total challenges",
        value: "57",
      },
      {
        title: "CHALLENGE OWNS TODAY",
        value: "31",
      },
      {
        title: "Total competitions",
        value: "5",
      },
      {
        title: "FLAGS SUBMITTED TODAY",
        value: "354",
      },
      {
        title: "Total sponsors",
        value: "0",
      },
    ],
  }),
};
</script>

<style lang="sass">
.brand
  background: linear-gradient(180deg, #76FF03 0.01%, rgba(255, 255, 255, 0) 0.02%, #0099FF 0.03%, #297BCD 25.78%, #76FF03 100%)

  -webkit-background-clip: text !important
  -webkit-text-fill-color: transparent !important
</style>
