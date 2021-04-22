<template>
  <v-card class="user-bg font-play mt-5" elevation="12">
    <v-card-title class="py-3">
      <span>Ангилал</span>
    </v-card-title>
    <v-card-text>
      <v-list nav class="user-bg">
        <v-list-item-group v-model="cats" multiple>
          <template v-for="item in category">
            <v-list-item :key="item.name" :value="item.name">
              <template #default="{ active }">
                <v-list-item-action>
                  <v-checkbox
                    :input-value="active"
                    dark
                    color="orange"
                  ></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between">
                    <span v-text="item.name" />
                    <span v-text="item.count" />
                  </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data: () => ({
    cats: []
  }),
  computed: {
    ...mapGetters({
      category: "academy/getCategory"
    })
  },
  watch: {
    cats(a, b) {
      this.$emit("filter", a)
    }
  },
  created() {
    this.cats = this.category.map((cat) => cat.name)
  }
}
</script>

<style></style>
