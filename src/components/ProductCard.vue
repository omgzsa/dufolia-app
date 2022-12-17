<script setup>
import { ref } from "vue";
import AppCountInput from "./AppCountInput.vue";

// props
defineProps({
  product: Object,
  imageLink: String,
});

// emits
defineEmits(["addItems"]);

// data
const count = ref(1);
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
        {{ product.attributes.description.slice(0, 60) }}...
      </p>
      <p class="font-bold mb-4">{{ product.attributes.price }} Ft</p>
      <AppButton :to="`/products/${product.id}`" class="flex-1 mb-2">
        Megnézem
      </AppButton>
      <AppCountInput v-model="count" />
      <button
        class="bg-accent text-white font-semibold px-2 py-3 rounded"
        @click="$emit('addItems', count), (count = 1)"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>
