<script setup>
import { ref } from "vue";
import { useCategoryStore } from "../stores/CategoryStore";

const categoryStore = useCategoryStore();
categoryStore.fill();

const checkedCategories = ref([]);
</script>
<template>
  <div class="flex flex-col items-stretch">
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
