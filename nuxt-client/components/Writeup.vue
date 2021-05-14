<template>
  <v-expansion-panel class="writeup mt-2 font-exo">
    <v-expansion-panel-header expand-icon>
      <v-row align="center" no-gutters>
        <v-col xs="12" sm="4" md="5" lg="6" xl="8" class="f-15">
          <nuxt-link
            :to="
              localePath({
                name: 'user-slug',
                params: { slug: writeup.author.slug }
              })
            "
          >
            <strong class="ml-3" v-text="writeup.author.username" />
          </nuxt-link>
        </v-col>
        <v-col xs="12" sm="8" md="7" lg="6" xl="4" align="right">
          <v-chip small class="ml-1" color="purple darken-2">
            <strong v-text="$t('score')" />
            <span class="ml-1" v-text="writeup.power" />
          </v-chip>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="mt-3" v-html="$md.render(writeup.content)" />
      <v-row class="grey--text lighten-5--text">
        <v-col cols="6" align="start">
          <span v-text="$t('postedAt')" />
          <span class="" v-text="writeup.created" />
        </v-col>
        <v-col cols="6" align="end">
          <v-form v-if="$auth.loggedIn" ref="form">
            <v-btn icon @click="$store.dispatch('writeup/like', writeup)">
              <v-icon
                size="20"
                :class="{ 'orange--text': writeup.status == 'like' }"
                >mdi-thumb-up</v-icon
              >
            </v-btn>
            <v-btn icon @click="$store.dispatch('writeup/dislike', writeup)">
              <v-icon
                size="20"
                :class="{ 'red--text': writeup.status == 'dislike' }"
                >mdi-thumb-down</v-icon
              >
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
      <!-- <div
        v-if="
          status == 'Дууссан' ||
          challenge.solved ||
          ($auth.loggedIn &&
            $auth.user.username == challenge.author.username) ||
          status == 'Дууссан'
        "
      >
        <v-row>
          <v-col cols="12" class="text-center">
            <h4
              v-if="
                $auth.loggedIn &&
                $auth.user.username == challenge.author.username
              "
              v-text="$t('youHaveAddedThisChallenge')"
            />
            <h4
              v-else-if="status == 'Дууссан'"
              v-text="$t('competitionOver')"
            />
            <h4
              v-else-if="challenge.solved"
              v-text="$t('youHaveSolvedThisChallenge')"
            />

            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <span
                  v-bind="attrs"
                  class="font-weight-bold"
                  style="color: #e85154"
                  v-on="on"
                  >Writeup</span
                >
              </template>
              <span>Soon2 Zoom2</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </div> -->
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    writeup: {
      required: true,
      type: Object
    }
  }
}
</script>
