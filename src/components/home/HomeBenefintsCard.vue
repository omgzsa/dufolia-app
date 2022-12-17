<script setup>
import { useGetImageUrl } from "@/composables/getImageUrl";

defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="rounded max-w-xs text-center px-12 py-12 transition duration-500 shadow-[0_8px_40px_0px_rgba(0,0,0,0.05)] hover:shadow-xl ease-in-out"
  >
    <img :src="useGetImageUrl(item.img)" class="mx-auto mb-4" />
    <h3 class="mb-4">{{ item.title }}</h3>
    <p class="text-slate-500">{{ item.text }}</p>
  </div>
</template>
