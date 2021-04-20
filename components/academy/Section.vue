<template>
  <v-card class="user-bg font-play mt-5" elevation="12">
    <v-card-title class="py-3">
      <span>Бүлгүүд</span>
    </v-card-title>
    <v-card-text>
      <v-btn
        v-for="section in sections"
        :key="section.name"
        class="btn-light mt-3"
        small
        block
        style="text-transform: none; justify-content: space-between"
      >
        <span class="f-15 align-left" v-text="section.name" />
        <v-icon v-if="section.completed" right color="primary">
          mdi-checkbox-marked</v-icon
        >
        <v-icon v-else right color="primary">
          mdi-checkbox-blank-outline</v-icon
        >
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    sections: {
      required: true,
      type: Array
    }
  }
}
</script>

<style></style>
