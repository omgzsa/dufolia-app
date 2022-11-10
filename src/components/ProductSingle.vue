<script setup>
// import { useGetProductImage } from "@/composables/useGetProductImage";
// import { onMounted } from "vue";
defineProps({
  productDetails: Object,
  url: String,
});
</script>
<template>
  <div>
    <h2>{{ productDetails.name }}</h2>
    <hr />
    <p>{{ productDetails.description }}</p>
    <hr />
    <p>{{ productDetails.price }}</p>
    <hr />
    <!-- <img
      :src="useGetProductImage(productDetails.image.data.attributes.url)"
      alt=""
    /> -->
    <pre>{{ productDetails.image.data.attributes.url }}</pre>
  </div>
</template>
