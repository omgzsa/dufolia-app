<script setup>
import ProductCard from "../ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";

defineProps({
  imageLink: String,
});

const productStore = useProductStore();
productStore.fillFeatured();
</script>

<template>
  <div
    class="grid grid-flow-row gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div
      v-for="product in productStore.productsFeatured"
      :key="product.id"
      class="text-center mx-auto"
    >
      <ProductCard :product="product" :imageLink="imageLink" />
    </div>
  </div>
</template>
