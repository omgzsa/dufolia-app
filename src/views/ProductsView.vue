<script setup>
import { useProductStore } from "@/stores/ProductStore";
import ProductArchiveCard from "../components/ProductArchiveCard.vue";
// import TheBreadCrumbs from "../components/TheBreadCrumbs.vue";

const imageLink = import.meta.env.VITE_STRAPI_URL;
const productStore = useProductStore();

productStore.fillArchive();
</script>

<template>
  <section class="px-2">
    <!-- <TheBreadCrumbs class="pt-24" /> -->
    <div v-if="!productStore.loading">
      <div
        class="pt-24 mx-auto grid grid-flow-row gap-10 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
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
