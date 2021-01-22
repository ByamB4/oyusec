<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11" class="mt-5">
        <div class="text-center">
          <v-icon size="50" v-text="mdiEmoticonSadOutline"></v-icon>
          <span class="font-roboto font-weight-bold f-20"
            >Хуудас олдсонгүй</span
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mdiEmoticonSadOutline } from "@mdi/js";
export default {
  data: () => ({
    mdiEmoticonSadOutline: mdiEmoticonSadOutline,
  }),
};
</script>
<style lang=""></style>
