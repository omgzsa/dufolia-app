<script setup>
defineProps({
  category: Object,
  imageLink: String,
});
</script>

<template>
  <div
    to="#"
    class="cursor-pointer flex flex-col place-items-center mx-auto max-w-xs overflow-hidden transition-transform duration-300 hover:-translate-y-1"
  >
    <div class="relative">
      <img
        :src="`${imageLink}${category.attributes.image?.data?.attributes.url}`"
        :alt="category.attributes.name"
        class="rounded-full max-h-52 sm:max-h-64"
      />
      <div
        class="absolute rounded-full top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-primary-100"
      ></div>
    </div>
    <div class="mt-4">
      <span class="text-lg font-display font-bold button">
        {{ category.attributes.name }}
      </span>
    </div>
  </div>
</template>

<style>
.button::after {
  content: "";
  display: flex;
  border: 0.5px solid;
  opacity: 0.25;
  border-bottom: solid 1px #c0c0c0;
}
</style>
