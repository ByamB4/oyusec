<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10">
        <client-only>
          <tiptap-vuetify
            v-model="content"
            class="font-exo"
            :extensions="extensions"
          />
        </client-only>
        <v-btn
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
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import {
//   TiptapVuetify,
//   Heading,
//   Bold,
//   Italic,
//   Strike,
//   Underline,
//   Code,
//   Paragraph,
//   BulletList,
//   OrderedList,
//   ListItem,
//   Link,
//   Blockquote,
//   HardBreak,
//   Image,
//   HorizontalRule,
//   History
// } from "tiptap-vuetify"
// export default {
//   components: { TiptapVuetify },
//   data: () => ({
//     form: {
//       loading: false,
//       valid: true
//     },
//     extensions: [
//       History,
//       Blockquote,
//       Link,
//       Underline,
//       Strike,
//       Italic,
//       ListItem,
//       BulletList,
//       OrderedList,
//       [
//         Heading,
//         {
//           options: {
//             levels: [1, 2, 3]
//           }
//         }
//       ],
//       [
//         Image,
//         {
//           options: {
//             imageSourcesOverride: true
//           }
//         }
//       ],
//       Bold,
//       Link,
//       Code,
//       HorizontalRule,
//       Paragraph,
//       HardBreak
//     ],
//     content: `
//       <h1>Гарчиг</h1>
//       <p>Энэ бүхэн миний бодлоос эхэлсэн юм.</p>
//     `
//   }),
//   methods: {
//     writeupAdd() {
//       // Hope implement regex soon
//       // if (!this.$auth.loggedIn) {
//       //   this.$toast.show("Эхлээд нэвтэрнэ үү", {
//       //     icon: "alert-circle"
//       //   })
//       //   return
//       // }
//       if (this.content.includes('<img src="data:image')) {
//         this.$toast.show("Та зургаа линк байдлаар оруулна уу", {
//           icon: "alert-circle"
//         })
//         return
//       }
//     }
//   }
// }
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
  &--dark
    .tiptap-vuetify-editor
      .v-card
        background-color: $dark-supp !important
      .v-sheet.v-toolbar
        .v-btn.v-btn--icon
          color: $gray-300 !important
        background-color: $light-core !important
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
