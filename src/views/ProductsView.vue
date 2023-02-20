<script setup>
import { computed } from "vue";
import { useProductStore } from "@/stores/ProductStore";

import IconDown from "../components/icons/IconDown.vue";
import IconUp from "../components/icons/IconUp.vue";
import ProductArchiveCard from "../components/ProductArchiveCard.vue";
import ProductFilters from "../components/ProductFilters.vue";

const imageLink = import.meta.env.VITE_STRAPI_URL;

const productStore = useProductStore();
productStore.fillArchive();

const filteredProducts = computed(() => {
  if (productStore.selected.length === 0) {
    return productStore.products;
  } else {
    return productStore.products.filter((product) =>
      productStore.selected.some(
        (categoryId) => categoryId === product.attributes.category.data.id
      )
    );
  }
});
const handleCheck = (e) => {
  productStore.selected = e;
  return productStore.selected;
};
</script>

<template>
  <section class="px-2 flex flex-col xl:flex-row">
    <!-- order by category -->
    <div class="pt-24 xl:pt-36 xl:w-1/4 relative">
      <ProductFilters @changeCheck="handleCheck" />
    </div>
    <!-- {{ filteredProducts }} -->
    <div v-if="!productStore.loading">
      <!-- order by price -->
      <div class="pt-6 xl:pt-24 pb-2">
        <button
          @click="productStore.ascendingPrice"
          class="text-sm flex flex-row items-center ml-auto"
        >
          ár szerint növekvő <IconUp />
        </button>
        <button
          @click="productStore.descendingPrice"
          class="text-sm flex flex-row items-center ml-auto"
        >
          ár szerint csökkenő <IconDown />
        </button>
      </div>
      <div
        class="mx-auto grid grid-flow-row gap-10 md:gap-7 lg:gap-6 xl:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <ProductArchiveCard
          class="mx-auto"
          v-for="product in filteredProducts"
          :key="product.name"
          :product="product"
          :imageLink="imageLink"
        />
        <!-- productStore.products.filter(p => p.attributes.category.data.id === 1)" -->
      </div>
    </div>
    <div v-else class="flex justify-center py-16 min-h-screen">
      <div class="spinner w-8 h-8"></div>
    </div>
  </section>
</template>
