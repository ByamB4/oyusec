<template>
  <v-row>
    <v-col v-for="n in 4" :key="n" cols="6">
      <v-card to="/challenges" elevation="0">
        <v-card-title class="justify-center">
          <h2>
            <v-icon size="35" color="yellow darken-2"
              >mdi-trophy-outline</v-icon
            >
            {{ $t("competition") }}
          </h2>
        </v-card-title>
        <v-card-text class="text-justify">
          <span
            style="line-height: 200%"
            class="f-19"
            v-text="$t('pages.index.competitionDescription')"
          />
        </v-card-text>
      </v-card>
    </v-col>
    <!-- <v-col cols="6">
      <v-card class="user-bg">
        <h2 class="text-center">
          <v-icon size="35" color="yellow darken-2">mdi-trophy-outline</v-icon>
          {{ $t("competition") }}
        </h2>
        <span
          style="line-height: 200%"
          class="f-19"
          v-text="$t('pages.index.competitionDescription')"
        />
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="user-bg">
        <h2 class="text-center">
          <v-icon size="35" color="yellow darken-2">mdi-trophy-outline</v-icon>
          {{ $t("competition") }}
        </h2>
        <span
          style="line-height: 200%"
          class="f-19"
          v-text="$t('pages.index.competitionDescription')"
        />
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="user-bg">
        <h2 class="text-center">
          <v-icon size="35" color="yellow darken-2">mdi-trophy-outline</v-icon>
          {{ $t("competition") }}
        </h2>
        <span
          style="line-height: 200%"
          class="f-19"
          v-text="$t('pages.index.competitionDescription')"
        />
      </v-card>
    </v-col> -->

    <!-- <h2 class="text-center">
      <v-icon size="35" color="cyan accent-5">mdi-flag-checkered</v-icon>
      {{ $t("challenge") }}
    </h2>

    <span
      style="line-height: 200%"
      class="f-19"
      v-text="$t('pages.index.challengeDescription')"
    />
    <h2 class="text-center">
      <v-icon size="35" color="light-blue accent-3">mdi-account-group</v-icon>
      {{ $t("community") }}
    </h2>
    <span
      style="line-height: 200%"
      class="f-19"
      v-text="$t('pages.index.communityDescription')"
    /> -->
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="sass">
.v-card:hover
  background-color: red !important
  // &:hover
  //   border: 1px solid #76ff03

@keyframes MoveUpDown
  0%
    bottom: 0px

  100%
    bottom: 30px
</style>
