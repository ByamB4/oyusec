<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 8 : 2"
      :to="{
        name: 'competitions-slug',
        params: {
          slug: competition.slug,
          id: competition.id,
          name: competition.name,
        },
      }"
      class="my-3 user-bg"
      max-width="350"
    >
      <v-img
        height="150"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-card-title>
        <strong v-text="competition.name" />
      </v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-text align="center">
        <div>Дуусна {{ competition.end_date }}</div>
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
}
</script>
