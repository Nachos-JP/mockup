<template>
  <v-app>
    <AppBar />

    <Navigation />

    <ProductDrawer />


    <v-main>
      <v-banner
        sticky
        class="sticky-banner"
      >

        <FilterSort
          @FilterSort:sortEmit="sortEmit"
          @FilterSort:filterEmit="filterEmit"
        />
      </v-banner>

      <slot />
    </v-main>

    <Footer />
  </v-app>

</template>

<script setup>
import {provide} from "vue";

provide("sortTypes", [
  {
    title: "新しい順",
    value: "new",
  },
  {
    title: "最近使用された順",
    value: "latest",
  },
  {
    title: "アクセス順",
    value: "access",
  },
  {
    title: "コメント数順",
    value: "comment",
  },
  {
    title: "お気に入り",
    value: "favorite",
  },
]);

provide("tags", [
  {
    title: "tag1",
    id: "tag1",
  },
  {
    title: "tag2",
    id: "tag2",
  },
  {
    title: "tag3",
    id: "tag3",
  },
  {
    title: "tag4",
    id: "tag4",
  },
  {
    title: "tag5",
    id: "tag5",
  },
]);

const selectedSortType = ref("new");
const selectedFilters = ref([]);

provide("selectedSortType", selectedSortType);
provide("selectedFilters", selectedFilters);

const sortEmit = (sortType) => {
  selectedSortType.value = sortType;
};

const filterEmit = (filters) => {
  selectedFilters.value = filters;
}
</script>

<style scoped>
.sticky-banner {
  top: 64px;
  /* padding: 0; */
  z-index: 2;
}
</style>
