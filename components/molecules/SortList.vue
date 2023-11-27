<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="auto">
      <div class="text-caption mr-5">並び替え</div>
    </v-col>

    <v-col cols="auto">
      <v-chip-group
        v-model="selectedSortType"
        mandatory
        selected-class="text-primary"
      >
        <v-chip
          v-for="{title, value} in sortTypes"
          :key="title"
          :value="value"
          size="small"
        >{{ title }}</v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script setup>
import {inject, watch, defineEmits} from "vue";

const sortTypes = inject("sortTypes");
const selectedSortType = ref();

// ページ読み込み時にv-chip-groupが選択状態にするために必要
onMounted(() => {
  selectedSortType.value = sortTypes[0].value;
});

const emit = defineEmits(["SortList:sortEmit"]);
watch(selectedSortType, (value) => {
  emit("SortList:sortEmit", value);
});
</script>
