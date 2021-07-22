<template>
  <v-app>
    Okay, okay — here is your flag: {{ makeid(32) }}
    <!-- <AppBar />
    <AppDrawer />
    <AppView /> -->
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
export default {
  methods: {
    makeid(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
  // components: {
  //   AppBar: () => import("./AppBar"),
  //   AppDrawer: () => import("./AppDrawer"),
  //   AppView: () => import("./AppView"),
  //   // AppFooter: () => import("./AppFooter"),
  // },
  // created({ redirect }) {
  //   console.log(redirect);
  // },
};
</script>

<style></style>
