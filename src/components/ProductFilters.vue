<script setup>
// import { ref } from "vue";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();
categoryStore.fill();

const emit = defineEmits(["changeCheck"]);

const changeCheck = function (e) {
  emit("changeCheck", categoryStore.selectedCategories);
  console.log(e.target.value);
};
</script>

<template>
  <div>
    <label
      v-for="category in categoryStore.categories"
      :key="category.id"
      class="text-sm flex flex-row items-center gap-1.5"
      ><input
        type="checkbox"
        :value="category.attributes.name"
        v-model="categoryStore.selectedCategories"
        @input="changeCheck"
      />{{ category.attributes.name }}</label
    >
    {{ categoryStore.selectedCategories }}
  </div>
</template>
