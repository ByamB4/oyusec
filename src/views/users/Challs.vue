<template lang="">
  <div class="bg-dark-1">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-row class="mx-3 " v-bind="attrs" v-on="on">
          <v-col cols="6" v-for="item in challenges" :key="item.title">
            <span>{{ item.title }}</span>
            <v-progress-linear
              link
              height="8px"
              :value="item.value"
              rounded
              :color="item.color"
            ></v-progress-linear>
          </v-col>
        </v-row>
      </template>
      <span>Цуглуулсан цом</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  data: () => ({
    challenges: [
      {
        title: "Cryptography",
        color: "red darken-2",
        value: Math.floor(100 * Math.random()),
      },
      {
        title: "Programming",
        color: "yellow darken-2",
        value: Math.floor(100 * Math.random()),
      },
      {
        title: "Miscellaneous",
        color: "teal",
        value: Math.floor(100 * Math.random()),
      },
      {
        title: "Reverse Engineering",
        color: "cyan",
        value: Math.floor(100 * Math.random()),
      },
    ],
  }),
};
</script>
<style lang=""></style>
