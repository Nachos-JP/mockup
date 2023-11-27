<template>
  <v-card
    :title="title"
    :to="partUrl"
  >
    <template v-slot:append>
      <favorite-btn :is-favorite="isFavorite" @FavoriteBtn:favoriteEmit="favoriteEmit" />
    </template>

    <div class="d-flex justify-center">
      <v-img
        width="300px"
        height="150px"
        src="@/assets/Apollo11.png"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
    </div>

    <v-card-text class="text-body-2 card-text">{{ text }}</v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="text-caption">
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-row no-gutters>
            <v-col>登録日</v-col>
            <v-col class="ml-5">{{ convertedRegisteredDate }}</v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>最終利用日</v-col>
            <v-col class="ml-5">{{ convertedLatestUseDate }}</v-col>
          </v-row>
        </v-col>

        <v-col cols="auto">
          <v-row no-gutters justify="end">
            <v-col class="mr-5">作成者</v-col>
            <v-col cols="auto">テスト研究室</v-col>
          </v-row>

          <v-row no-gutters justify="end">
            <v-col></v-col>
            <v-col cols="auto">山田 太郎</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {DateTime} from "luxon";

const props = defineProps({
  id: String,
  componentId: String,
  productId: String,
  title: String,
  text: String,
  latestUseDate: String,
  registeredDate: String,
  favorite: Boolean,
});

const partUrl = `/products/${props.productId}/components/${props.componentId}/${props.id}`;

const convertDate = (date) => {
  return DateTime.fromISO(date).toFormat("yyyy/MM/dd");
};

const convertedLatestUseDate = convertDate(props.latestUseDate);
const convertedRegisteredDate = convertDate(props.registeredDate);

const isFavorite = ref(props.favorite);

const favoriteEmit = (newFavoriteBool) => {
  isFavorite.value = newFavoriteBool;
};
</script>

<style scoped>
.card-text {
  height: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
