<template>
  <div class="bg-dark-1">
    <div v-if="loading">
      <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
    </div>
    <div v-else>
      <v-row class="mx-3">
        <v-col cols="6" v-for="item in challenges" :key="item.title">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span>{{ item.title }}</span>
              <v-progress-linear
                height="8px"
                :value="item.value"
                :color="item.color"
                v-bind="attrs"
                v-on="on"
                rounded
              ></v-progress-linear>
            </template>
            <span v-text="item.value + '%'"></span>
          </v-tooltip>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: `profile/${this.$route.params.slug}/chall`,
      challenges: [
        {
          title: "Cryptography",
          color: "red darken-2",
          value: 0,
        },
        {
          title: "Programming",
          color: "pink darken-2",
          value: 0,
        },
        {
          title: "Miscellaneous",
          color: "purple darken-1",
          value: 0,
        },
        {
          title: "Reverse Engineering",
          color: "deep-purple darken-2",
          value: 0,
        },
        {
          title: "Web exploitation",
          color: "amber accent-4",
          value: 0,
        },
        {
          title: "Binary exploitation",
          color: "blue darken-2",
          value: 0,
        },
        {
          title: "Forensics",
          color: "orange darken-3",
          value: 0,
        },
      ],
      loading: true,
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      const resp = await this.$api.get(this.url);
      this.challenges[0].value = resp.data.crypto;
      this.challenges[1].value = resp.data.programming;
      this.challenges[2].value = resp.data.misc;
      this.challenges[3].value = resp.data.reverse;
      this.challenges[4].value = resp.data.web;
      this.challenges[5].value = resp.data.pwn;
      this.challenges[6].value = resp.data.forensics;
      this.loading = false;
    },
  },
};
</script>
<style lang=""></style>
