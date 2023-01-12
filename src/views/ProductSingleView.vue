<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

import ProductSingle from "@/components/ProductSingle.vue";
import TheBreadCrumbs from "../components/TheBreadCrumbs.vue";

import { useCartStore } from "../stores/CartStore";

const imageLink = import.meta.env.VITE_STRAPI_URL;
const cartStore = useCartStore();

// cartStore.$onAction(({ name, store, args, after, onError }) => {
//   if (name == "addItems") {
//     after(() => {
//       console.log(args[0]);
//     });
//   }
// });

let product = ref({});
const loading = ref(null);
const route = useRoute();
const error = ref(null);
const url = import.meta.env.VITE_STRAPI_URL;

const apiUrl = url + "/api/products/" + route.params.id + "?populate=*";

onBeforeMount(() => {
  getProduct();
});

const getProduct = async () => {
  loading.value = true;
  await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      product.value = data.data;
      loading.value = false;
    })
    .catch((err) => (error.value = err));
};
</script>
<template>
  <section>
    <TheBreadCrumbs class="pt-20 pb-4" />
    <div v-if="!loading">
      <ProductSingle
        :product="product"
        :imageLink="imageLink"
        @addItems="cartStore.addItems($event, product)"
      />
    </div>
    <div v-else class="flex justify-center py-16 min-h-screen">
      <div class="spinner w-8 h-8"></div>
    </div>
  </section>
</template>
