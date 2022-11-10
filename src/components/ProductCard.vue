<script setup>
import AppButton from "@/components/AppButton.vue";

defineProps({
  product: Object,
  imageLink: String,
});
</script>

<template>
  <div
    class="max-w-xs rounded overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
  >
    <img
      :src="`${imageLink}${product.attributes.image.data.attributes.url}`"
      :alt="product.attributes.name"
      class="mb-2 px-12 py-12 max-h-60 object-contain w-full bg-gray-200"
    />
    <div class="px-4 py-4 flex flex-col">
      <h3 class="text-primary-100 flex-1">{{ product.attributes.name }}</h3>
      <p class="text-sm mb-4 flex-1">
        {{ product.attributes.description.slice(0, 110) }}...
      </p>
      <p class="font-bold mb-4">{{ product.attributes.price }} Ft</p>
      <AppButton class="flex-1"> Megnézem </AppButton>
    </div>
  </div>
</template>
