<template>
  <v-row class="mx-3">
    <v-col cols="12" class="text-center">
      <h2 style="letter-spacing: 0.3px" class="font-press f-15">
        [ {{ $t("solvedChallenges") }} ]
      </h2>
    </v-col>
    <v-col cols="12">
      <v-simple-table dark>
        <thead>
          <tr>
            <th
              v-for="tab in $t('userTab.profile.solvesTab')"
              :key="tab.name"
              class="text-center"
              v-text="tab.name"
            />
          </tr>
        </thead>

        <tbody>
          <tr v-for="challenge in profile.challenges" :key="challenge.name">
            <td class="text-center" v-text="challenge.created" />
            <td class="text-center" v-text="challenge.category" />
            <td class="text-center" v-text="challenge.name" />
            <td class="text-center" v-text="challenge.value" />
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },
};
</script>
