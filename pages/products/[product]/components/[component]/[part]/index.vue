<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          elevation="0"
          :title="targetPart.title"
          max-height="300px"
        >
          <template v-slot:append>
            <favorite-btn :is-favorite="isFavorite" @FavoriteBtn:favoriteEmit="favoriteEmit" />
          </template>

          <v-row>
            <v-col cols="9">
              <v-card-text class="pt-0 pr-0 pb-0">アルゴリズム概要</v-card-text>
              <v-card-text>{{ targetPart.text }}</v-card-text>
            </v-col>

            <v-divider vertical></v-divider>

            <v-col cols="3" class="text-caption">
              <v-row no-gutters>
                <v-col cols="12">アルゴリズムの評価</v-col>
              </v-row>

              <v-row no-gutters class="mt-3" justify="space-between" align="center">
                <v-col cols="auto">登録日</v-col>
                <v-col cols="auto">{{ convertDate(targetPart.registeredDate) }}</v-col>
              </v-row>

              <v-row no-gutters justify="space-between" align="center">
                <v-col cols="auto">最近使用された日</v-col>
                <v-col cols="auto">{{ convertDate(targetPart.latestUseDate) }}</v-col>
              </v-row>

              <v-row no-gutters justify="space-between" align="center">
                <v-col cols="auto">お気に入りの数</v-col>
                <v-col cols="auto">777</v-col>
              </v-row>

              <v-row no-gutters justify="space-between" align="center">
                <v-col cols="auto">コメント数</v-col>
                <v-col cols="auto">1234</v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-card
        elevation="1"
        width="100%"
        height="500px"
        style="background-color: rgb(244, 176, 244);"
      >
      </v-card>
    </v-row>

    <v-row class="mt-10">
      <v-card
        elevation="1"
        width="100%"
        height="500px"
        style="background-color: rgb(174, 231, 231);"
      >

      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import {DateTime} from "luxon";

const {parts: {value: parts}} = useParts();

const route = useRoute();
const targetPart = parts.find(v => v.id === route.params.part);

const isFavorite = ref(targetPart.favorite);
const favoriteEmit = (newFavoriteBool) => {
  isFavorite.value = newFavoriteBool;
};

const convertDate = (date) => {
  return DateTime.fromISO(date).toFormat("yyyy/MM/dd");
};
</script>
