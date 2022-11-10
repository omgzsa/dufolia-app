<script setup>
defineProps({
  to: String,
});
</script>

<template>
  <button class="bg-primary-100 text-white font-semibold px-8 py-3 rounded">
    <slot />
  </button>
</template>
