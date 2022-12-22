<script setup>
import { useProductStore } from "@/stores/ProductStore";
import ProductArchiveCard from "../components/ProductArchiveCard.vue";
import TheBreadCrumbs from "../components/TheBreadCrumbs.vue";

const imageLink = import.meta.env.VITE_STRAPI_URL;
const productStore = useProductStore();

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
    <TheBreadCrumbs class="pt-36" />
    <div
      class="container pt-24 mx-auto grid grid-flow-row gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <ProductArchiveCard
        class="mx-auto"
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        :imageLink="imageLink"
      />
    </div>
  </section>
</template>
