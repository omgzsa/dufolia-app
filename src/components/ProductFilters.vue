<script setup>
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/CategoryStore";

const categoryStore = useCategoryStore();
categoryStore.fill();

const emit = defineEmits(["changeCheck"]);

const changeCheck = function () {
  emit("changeCheck", categoryStore.selectedCategories);
};
onMounted(() => {
  //
});
</script>

<template>
  <div>
    <label
      v-for="category in categoryStore.categories"
      :key="category.id"
      class="text-sm flex flex-row items-center gap-1.5"
      ><input
        type="checkbox"
        :value="category.id"
        v-model="categoryStore.selectedCategories"
        @change="changeCheck"
      />{{ category.attributes.name }}</label
    >
  </div>
</template>
