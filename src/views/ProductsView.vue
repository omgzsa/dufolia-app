<script setup>
import { useFilterStore } from "@/stores/FilterStore";
import { useProductStore } from "@/stores/ProductStore";
import IconDown from "../components/icons/IconDown.vue";
import IconUp from "../components/icons/IconUp.vue";

import ProductArchiveCard from "../components/ProductArchiveCard.vue";
import ProductFilters from "../components/ProductFilters.vue";

const imageLink = import.meta.env.VITE_STRAPI_URL;
const filterStore = useFilterStore();
const productStore = useProductStore();

productStore.fill();
</script>

<template>
  <section class="px-2 flex flex-col xl:flex-row">
    <div class="pt-24 xl:w-1/4 relative">
      <!-- order by category -->
      <h4 class="font-medium">Kategóriák:</h4>
      <ProductFilters />
    </div>

    <div v-if="!productStore.loading">
      <div class="pt-12 xl:pt-24 pb-2">
        <!-- order by price -->
        <button
          class="text-sm flex flex-row items-center ml-auto"
          @click="filterStore.ascendingByPrice"
        >
          ár szerint növekvő <IconUp />
        </button>
        <button
          class="text-sm flex flex-row items-center ml-auto"
          @click="filterStore.descendingByPrice"
        >
          ár szerint csökkenő <IconDown />
        </button>
      </div>
      <div
        class="mx-auto grid grid-flow-row gap-10 md:gap-10 lg:gap-16 xl:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
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
