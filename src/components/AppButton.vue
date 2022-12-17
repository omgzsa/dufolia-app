<script setup>
import { RouterLink } from "vue-router";

defineProps({
  ...RouterLink.props,
});
</script>

<template>
  <RouterLink
    v-bind="$props"
    class="bg-primary-100 text-white font-semibold px-8 py-3 rounded hover:bg-primary-200"
  >
    <slot />
  </RouterLink>
</template>
