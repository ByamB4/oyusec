<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 8 : 2"
      :to="
        localePath({
          name: 'competitions-slug',
          params: {
            slug: competition.slug,
            id: competition.id,
            name: competition.name,
          },
        })
      "
      class="my-3 user-bg"
      max-width="350"
    >
      <v-img
        height="150"
        lazy-src="loading-contest.png"
        :src="competition.photo"
      />
      <v-card-title>
        <strong v-text="competition.name" />
      </v-card-title>

      <v-divider class="mx-4" />

      <v-card-text align="center">
        <span v-text="$t('endsAt')" />
        <span v-text="competition.end_date" />
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    competition: {
      required: true,
      type: Object,
    },
  },
  computed: {
    end_date() {
      const date = new Date(this.competition.end_date);
      return `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${this.formatNum(date.getHours())}:${this.formatNum(
        date.getMinutes()
      )}`;
    },
    description() {
      return String(this.competition.description);
    },
    rule() {
      return String(this.competition.rule);
    },
    prize() {
      return String(this.competition.prize);
    },
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),
  },
};
</script>
