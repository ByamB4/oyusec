<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="user-bg"
      :elevation="hover ? 12 : 2"
      :to="{
        name: 'academy-slug',
        params: {
          slug: tutorial.slug,
        },
      }"
    >
      <v-img height="200" :src="tutorial.photo" />

      <v-card-title>
        <span class="text-truncate" v-text="tutorial.name" />
      </v-card-title>

      <v-card-text>
        <v-row class="mx-0 text-justify">
          <span v-text="tutorial.description" />
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    tutorial: {
      required: true,
      type: Object,
    },
  },
};
</script>
