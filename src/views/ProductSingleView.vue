<script setup>
import { onMounted, ref, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
// import ProductSingle from "@/components/ProductSingle.vue";

const ProductSingle = defineAsyncComponent(() =>
  import("@/components/ProductSingle.vue")
);

let productDetails = ref({});
const route = useRoute();
const error = ref(null);
const url = import.meta.env.VITE_STRAPI_URL;

const apiUrl = url + "/api/products/" + route.params.id + "?populate=*";

onMounted(() => {
  fetchAllProductDetails();
  console.log(productDetails);
});

const fetchAllProductDetails = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      productDetails.value = data.data.attributes;
      console.log(productDetails.value);
    })
    .catch((err) => (error.value = err));
};
</script>
<template>
  <ProductSingle :product-details="productDetails" :url="url" />
</template>
