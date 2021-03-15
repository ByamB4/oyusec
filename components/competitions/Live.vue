<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 8 : 2"
      class="my-3 user-bg font-cabin"
      max-width="374"
    >
      <v-img
        height="150"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title><strong>OyuSec Round #1</strong></v-card-title>

      <v-card-text>
        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text align="center">
        <div>Ends at 31 Mar 2021 , 22:00 pm</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  data: () => ({}),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
