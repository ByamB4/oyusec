<template>
  <v-card class="user-bg" elevation="12">
    <v-card-title primary-title>
      <span class="f-20 f-semibold">Заавар</span>
    </v-card-title>
    <v-card-text class="text-justify">
      <p class="f-15" v-html="hint" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    hint:
      "Таны профайл зураг <b>gravatar</b> буюу мэйлээс чинь ирж байгаа бөгөөд хэрвээ та зургаа солих, оруулах хүсэлтэй бол <b>gravatar</b> дээр өөрчлөлт оруулахад манайх дээр шууд шинэчлэлт орох юм.",
  }),
}
</script>

<style></style>
