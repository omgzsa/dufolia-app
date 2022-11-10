<script setup>
import ProductCard from "../components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";

const imageLink = "http://localhost:1337";

const productStore = useProductStore();
productStore.fill();
</script>

<template>
  <div
    class="grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div
      v-for="product in productStore.products.data"
      :key="product.id"
      class="text-center mx-auto"
    >
      <ProductCard :product="product" :imageLink="imageLink" />
    </div>
  </div>
</template>
