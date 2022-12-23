<script setup>
defineProps({
  product: Object,
  imageLink: String,
});
</script>

<template>
  <router-link
    :to="{
      name: 'product.single',
      params: { id: product.id, slug: product.attributes.slug },
    }"
    class="max-w-xs md:max-w-sm block group transition-transform duration-300 hover:-translate-y-1"
  >
    <img
      :src="`${imageLink}${product.attributes.image.data.attributes.url}`"
      :alt="product.attributes.name"
      class="w-full rounded aspect-square px-10 py-10 max-h-64 bg-primary-100/10 h-fit object-contain"
    />

    <div class="mt-3">
      <h3
        class="font-medium text-primary-100 group-hover:underline group-hover:underline-offset-4"
      >
        {{ product.attributes.name }}
      </h3>

      <p class="mt-1 text-sm text-gray-700">
        {{ product.attributes.description.slice(0, 75) }}...
      </p>
      <p class="mt-1 text-md font-medium text-gray-700">
        {{ product.attributes.price }} Ft
      </p>
    </div>
  </router-link>
</template>
