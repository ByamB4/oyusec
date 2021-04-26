<template>
  <client-only>
    <div>
      <tiptap-vuetify
        v-model="form.content"
        class="font-exo"
        :extensions="extensions"
      />
      <v-container>
        <v-form ref="form" v-model="form.valid" @submit.prevent="submit">
          <v-row>
            <v-col cols="5">
              <v-text-field
                v-model="form.title"
                :loading="form.loading"
                :rules="[$rules.required]"
                label="Гарчиг"
                color="white"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="form.thumbnail"
                :loading="form.loading"
                :rules="[$rules.url]"
                label="Thumbnail зурагний линк"
                color="white"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn
                :loading="form.loading"
                :disabled="!form.valid || form.loading"
                block
                elevation="2"
                color="primary"
                type="submit"
              >
                <span v-text="$t('submit')" />
                <template #loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <!-- <v-btn
        :loading="form.loading"
        :disabled="content.length < 50 || form.loading"
        elevation="2"
        depressed
        color="primary"
        class="mt-5"
        @click="writeupAdd"
      >
        <span v-text="$t('publish')" />
        <template #loader>
          <span class="custom-loader">
            <v-icon light>mdi-cached</v-icon>
          </span>
        </template>
      </v-btn> -->
    </div>
  </client-only>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  Image,
  HorizontalRule,
  History
} from "tiptap-vuetify"
export default {
  components: { TiptapVuetify },
  data: () => ({
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [2, 3]
          }
        }
      ],
      [
        Image,
        {
          options: {
            imageSourcesOverride: true
          }
        }
      ],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    form: {
      loading: false,
      valid: true,
      title: "",
      thumbnail: "",
      content: `
    <h2>Анализ</h2><p>Бидэнд <strong>elf</strong> файл өгөгдөх бөгөөд <code>rabin</code> команд ашиглаж үзэх юм бол доорх байдалтай харагдаж байна.</p><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/2.png" alt="img"></p><p>Статик бинари файл c++ хэл дээр бичигдсэн байна. Азаар <code>stripped</code> бинари биш учир <code>symbol</code> ууд шууд харагдах юм.</p><h2>Бодолт</h2><p>...</p>
    `
    }
  }),
  methods: {
    reset() {
      this.form.loading = false
      this.$refs.form.resetValidation()
    },
    async submit() {
      if (!this.$auth.loggedIn) {
        this.$toast.show("Эхлээд нэвтэрнэ үү", {
          icon: "alert-circle"
        })
        return
      }
      // Hope implement regex soon
      if (this.form.content.includes('<img src="data:image')) {
        this.$toast.show("Та зургаа линк байдлаар оруулна уу", {
          icon: "alert-circle"
        })
        return
      }
      this.loading = true
      const { data } = await this.$axios.post("api/writeups/", {
        action: "add",
        data: this.form
      })
      if (data.success) {
        this.$toast.success(data.detail, {
          icon: "check-circle"
        })
        this.reset()
      } else {
        this.$toast.error(data.detail, {
          icon: "alert-circle"
        })
      }
    }
  }
}
</script>

<style lang="sass">
.theme
  &--light
    .tiptap-vuetify-editor
      .v-card
        background-color: $light-supp !important
      .v-sheet.v-toolbar
        .v-btn.v-btn--icon
          color: $gray-300 !important
        background-color: #202030 !important
      a
        color: #2196F3 !important
  &--dark
    .tiptap-vuetify-editor
      .v-card
        background-color: $dark-supp !important
      .v-sheet.v-toolbar
        .v-btn.v-btn--icon
          color: $gray-300 !important
        background-color: $light-core !important
      a
        color: #2196F3 !important
// ::v-deep {
//   /* Basic editor styles */
//   .ProseMirror {
//     > * + * {
//       margin-top: 0.75em;
//     }

//     code {
//       // background-color: rgba(#616161, 0.1);
//       background-color: red !important;
//       color: #616161;
//     }
//   }

//   .content {
//     padding: 1rem 0 0;

//     h3 {
//       margin: 1rem 0 0.5rem;
//     }

//     pre {
//       border-radius: 5px;
//       color: #333;
//     }

//     code {
//       display: block;
//       white-space: pre-wrap;
//       font-size: 0.8rem;
//       padding: 0.75rem 1rem;
//       background-color: #e9ecef;
//       color: #495057;
//     }
//   }
// }
</style>
