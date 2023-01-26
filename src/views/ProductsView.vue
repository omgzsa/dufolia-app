<script setup>
import { useFilterStore } from "@/stores/FilterStore";
import { useProductStore } from "@/stores/ProductStore";
// import { useCategoryStore } from "../stores/CategoryStore";

import ProductArchiveCard from "../components/ProductArchiveCard.vue";
import ProductFilters from "../components/ProductFilters.vue";

const imageLink = import.meta.env.VITE_STRAPI_URL;
const filterStore = useFilterStore();
const productStore = useProductStore();
// const categoryStore = useCategoryStore();

productStore.fill();
// categoryStore.fill();
</script>

<template>
  <section class="px-2 flex flex-col xl:flex-row">
    <div class="pt-24 xl:w-1/4 relative">
      <!-- order by price -->
      <div class="flex flex-col">
        <button class="text-sm" @click="filterStore.ascendingByPrice">
          ár szerint növekvő
        </button>
        <button class="text-sm" @click="filterStore.descendingByPrice">
          ár szerint csökkenő
        </button>
      </div>

      <!-- order by category -->
      <ProductFilters />
    </div>

    <div v-if="!productStore.loading">
      <div
        class="pt-12 xl:pt-24 mx-auto grid grid-flow-row gap-10 md:gap-10 lg:gap-16 xl:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <ProductArchiveCard
          class="mx-auto"
          v-for="product in productStore.products"
          :key="product.name"
          :product="product"
          :imageLink="imageLink"
        />
      </div>
    </div>
    <div v-else class="flex justify-center py-16 min-h-screen">
      <div class="spinner w-8 h-8"></div>
    </div>
  </section>
</template>
