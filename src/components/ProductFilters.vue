<script setup>
import { ref } from "vue";

import { useCategoryStore } from "../stores/CategoryStore";
const categoryStore = useCategoryStore();

categoryStore.fill();
const checkedCategories = ref([]);

// defineProps({
//   categories: Array,
// });
// const categories = ref([
//   { id: 1, name: "cat1" },
//   { id: 2, name: "cat2" },
//   { id: 3, name: "cat3" },
// ]);
</script>
<template>
  <div class="flex flex-col items-stretch">
    <h4 class="mb-2">Kategóriák:</h4>
    <label
      v-for="category in categoryStore.categories"
      :for="category.attributes.name"
      :key="category.id"
      class="text-sm pb-0.5"
    >
      <input
        type="checkbox"
        :id="category.attributes.name"
        :value="category.attributes.name"
        v-model="checkedCategories"
      />
      {{ category.attributes.name }}
    </label>
  </div>
  <!-- <pre>{{ checkedCategories }}</pre> -->
</template>
