<template>
  <v-card elevation="3" :to="{ name: 'writeups-id', params: { id: wrt.id } }">
    <v-row class="mt-5">
      <v-col cols="12" sm="12" md="8" lg="10" xl="10">
        <v-card-title>
          <h3 class="text-truncate" v-text="wrt.name" />
        </v-card-title>

        <v-card-text class="text-truncate">
          <p class="col-gray-300 f-17" v-text="wrt.desc" />
        </v-card-text>

        <v-card-actions>
          <v-row justify="center">
            <v-col cols="6">
              <v-chip
                v-for="(tag, _) in wrt.categories"
                :key="_"
                :color="$rand.color()"
                small
                text-color="white"
                outlined
                v-text="tag"
              />
            </v-col>
            <v-col cols="6" align="end">
              <v-icon class="col-gray-300" size="20"
                >mdi-thumb-up-outline</v-icon
              >
              <span class="col-gray-300 ml-2" v-text="wrt.likes" />
              <v-icon class="col-gray-300 ml-2" size="20">mdi-eye</v-icon>
              <span class="col-gray-300 ml-2" v-text="wrt.views" />
              <v-icon class="col-gray-300 ml-2" size="20">mdi-chat</v-icon>
              <span class="col-gray-300 ml-2" v-text="wrt.comms" />
              <nuxt-link
                :to="{
                  name: 'user-slug',
                  params: { slug: wrt.author.slug }
                }"
                class="ml-2 col-gold"
                v-text="wrt.author.name"
              />
              <span class="ml-2">{{ wrt.time }} мин</span>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-col>
      <v-col class="hidden-md-and-down" md="4" lg="2" xl="2">
        <v-avatar size="125" rounded>
          <v-img :src="wrt.img"></v-img>
        </v-avatar>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    wrt: {
      required: true,
      type: Object
    }
  }
}
</script>

<style></style>
