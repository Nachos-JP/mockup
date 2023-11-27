<template>
  <v-row>
    <v-col>
      <v-autocomplete
        v-model="selectedTags"
        :items="tags"
        prepend-inner-icon="mdi-filter-variant"
        rounded
        variant="solo"
        chips
        closable-chips
        label="Keywords"
        multiple
        item-title="title"
        item-value="id"
        class="autocomplete-box"
        hide-details
      >
        <template v-slot:chip="{props, item}">
          <v-chip
            v-bind="props"
            :text="item.title"
          ></v-chip>
        </template>
      </v-autocomplete>
    </v-col>
  </v-row>
</template>

<script setup>
import {inject, watch, defineEmits} from "vue";

const tags = inject("tags");
const selectedTags = ref([]);

const emit = defineEmits(["TagByKeyword:filterEmit"]);
watch(selectedTags, (tags) => {
  emit("TagByKeyword:filterEmit", [...tags]);
});
</script>

<style scoped>
.autocomplete-box {
  min-width: 200px;
}
</style>
