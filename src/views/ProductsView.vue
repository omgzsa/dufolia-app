<script setup>
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "../stores/CartStore";
import ProductCard from "../components/ProductCard.vue";
import TheCart from "../components/TheCart.vue";

const imageLink = import.meta.env.VITE_STRAPI_URL;
const productStore = useProductStore();
const cartStore = useCartStore();

// cartStore.$onAction(({ name, store, args, after, onError }) => {
//   if (name == "addItems") {
//     after(() => {
//       console.log(args[0]);
//     });
//   }
// });

productStore.fill();
</script>

<template>
  <section>
    <div class="pt-10">
      <TheCart />
    </div>
    <div
      class="container mx-auto grid grid-flow-row gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <ProductCard
        class="text-center mx-auto"
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        :imageLink="imageLink"
        @addItems="cartStore.addItems($event, product)"
      />
    </div>
  </section>
</template>
