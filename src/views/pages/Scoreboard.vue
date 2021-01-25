<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <div v-if="loading">
          <v-skeleton-loader
            v-for="ind in 5"
            :key="ind"
            type="list-item-avatar"
            class="mt-3"
            transition
          ></v-skeleton-loader>
        </div>
        <div v-else>
          <v-simple-table class="font-monts">
            <thead>
              <tr class="bg-dark ">
                <th class="text-center white--text" style="width:10%">
                  RANK
                </th>
                <th class="text-left white--text" style="width: 50%">
                  USER
                </th>
                <th class="text-center white--text" style="width: 20%">
                  SCORE
                </th>
                <th class="text-center white--text" style="width: 20%">
                  FIRST BLOOD
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, ind) in users" :key="ind" class="bg-dark">
                <td class="text-center">{{ ind + 1 }}</td>
                <td>{{ user.fullname }}</td>
                <td class="text-center">{{ user.score }}</td>
                <td class="text-center">{{ user.first_blood }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    users: [],
    loading: true,
    url: "ctf/scoreboard/",
  }),

  created() {
    this.$store.commit("SET_LOADING", true);
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      const resp = await this.$api.get(this.url);
      this.users = resp.data;
      this.loading = false;
      this.$store.commit("SET_LOADING", false);
    },
  },
};
</script>
