<template>
  <v-container>
    <v-row>
      <v-col
        v-for="part in filteredParts"
        :key="part.title"
        lg="4"
        md="6"
        sm="12"
      >
        <ProductCard v-bind="part" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {inject} from "vue";

definePageMeta({
  layout: "product",
});

const sort = inject("selectedSortType");
const filters = inject("selectedFilters");

const route = useRoute();
const [productId, componentsUrl, componentId] = route.params.slug;

const {parts: {value: parts}} = useParts();
const {components: {value: components}} = useComponents();

const sortParts = (parts) => {
  const partsCopy = [...parts];

  switch(sort.value){
    case "new":
      return partsCopy.sort((a, b) => {
        return new Date(b.registeredDate) - new Date(a.registeredDate);
      });

    case "latest":
      return partsCopy.sort((a, b) => {
        return new Date(b.latestUseDate) - new Date(a.latestUseDate);
      });

    case "access":
      return partsCopy.sort((a, b) => {
        return b.accessCount - a.accessCount;
      });

    case "comment":
      return partsCopy.sort((a, b) => {
        return b.commentCount - a.commentCount;
      });

    case "favorite":
      return partsCopy.sort((a, b) => {
        return b.favoriteCount - a.favoriteCount;
      });
  }
};

const filterByTags = (parts) => {
  if(filters.value.length === 0) return parts;

  return parts.filter(v => {
    return filters.value.every(w => v.tags.some(x => x === w));
  });
};

const filteredParts = computed(() => {
  if(productId === undefined) return sortParts(filterByTags(parts));

  if(componentId === undefined && componentsUrl === "components"){
    const targetComponents = components.filter(v => v.productId === productId);
    return sortParts(filterByTags(parts.filter(v => targetComponents.some(w => w.id === v.componentId))));
  }

  return sortParts(filterByTags(parts.filter(v => v.componentId === componentId)));
});
</script>
