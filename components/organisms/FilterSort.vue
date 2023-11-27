<template>
  <v-container>
    <v-row align="center" justify="space-around">
      <v-col>
        <TagByKeyword @TagByKeyword:filterEmit="filterEmit" />
      </v-col>

      <v-col cols="auto">
        <SortList @SortList:sortEmit="sortEmit" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {defineEmits} from "vue";

const emit = defineEmits(["FilterSort:filterEmit", "FilterSort:sortEmit"]);

const filterEmit = (filters) => {
  emit("FilterSort:filterEmit", filters);
};

const sortEmit = (sortType) => {
  emit("FilterSort:sortEmit", sortType);
};
</script>
