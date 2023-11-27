<template>
  <v-icon
    :class="iconClass"
    @click.stop.prevent="toggleFavorite"
    @mousedown.stop=""
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >{{ isFavorite ? "mdi-star" : "mdi-star-outline" }}</v-icon>
</template>

<script setup>
import {defineEmits} from "vue";

const props = defineProps({
  isFavorite: Boolean,
});

const isHovering = ref(false);
const isClicked = ref(false);
const iconClass = computed(() => {
  return {
    "favorite-icon": props.isFavorite || isHovering.value,
    "clicked-icon": isClicked.value,
  };
});

const emit = defineEmits(["FavoriteBtn:favoriteEmit"]);

const toggleFavorite = () => {
  emit("FavoriteBtn:favoriteEmit", !props.isFavorite);
  isClicked.value = true;
  setTimeout(() => isClicked.value = false, 500);
};
</script>

<style scoped>
.favorite-icon {
  color: orange;
  transition: .3s ease-out;
}

.clicked-icon {
  animation: sparkle 0.5s linear;
}

@keyframes sparkle {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.5); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
