<script setup>
import HomeCategoryCard from "./HomeCategoryCard.vue";
import { useCategoryStore } from "@/stores/CategoryStore";

defineProps({
  imageLink: String,
});

const categoryStore = useCategoryStore();
categoryStore.fillCategories();
</script>

<template>
  <div
    class="grid grid-flow-row gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  >
    <div v-for="category in categoryStore.categories" :key="category.id">
      <HomeCategoryCard :category="category" :imageLink="imageLink" />
    </div>
  </div>
</template>
