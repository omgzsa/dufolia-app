<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  ...RouterLink.props,
});

const isExternal = computed(
  () => typeof props.to === "string" && props.to.startsWith("http")
);
</script>

<template>
  <template v-if="isExternal">
    <a :href="to" rel="noopener" target="_blank"><slot /></a>
  </template>
  <RouterLink v-else v-bind="$props"><slot /></RouterLink>
</template>
