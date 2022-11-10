<script setup>
import HomeBenefintsCard from "./HomeBenefintsCard.vue";

defineProps({
  benefits: Array,
});
</script>

<template>
  <div
    class="grid gap-y-10 sm:gap-x-6 sm:grid-cols-2 xl:grid-cols-4 justify-items-center"
  >
    <div v-for="item in benefits" :key="item.title">
      <HomeBenefintsCard :item="item" />
    </div>
  </div>
</template>
