<script setup>
import { useGetProductImage } from "@/composables/useGetProductImage";
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
    <!--
       ENABLE COMMENTED LINK BELOW TO REPRODUCE BUG
     -->
    <!-- <img
      :src="useGetProductImage(productDetails.image.data.attributes.url)"
      alt=""
    /> -->
    <pre>{{ productDetails }}</pre>
  </div>
</template>
