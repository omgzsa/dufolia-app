<script setup>
import IconMinus from "./icons/IconMinus.vue";
import IconPlus from "./icons/IconPlus.vue";
defineProps({
  modelValue: { type: [Number, String], default: 0 },
});

const emit = defineEmits(["update:modelValue", "input"]);
const updateValue = (value) => {
  if (value !== "") {
    emit("update:modelValue", value);
  }
};
</script>

<template>
  <span class="flex items-center">
    <button
      class="text-xs p-1 cursor-pointer text-gray-600 hover:text-primary-100"
      @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"
    >
      <IconMinus />
    </button>
    <input
      class="no-spinner"
      :value="modelValue"
      type="number"
      min="0"
      @input="updateValue($event.target.value)"
    />
    <button
      class="text-xs p-1 text-gray-600 hover:text-primary-100 cursor-pointer"
      @click="updateValue(modelValue + 1)"
    >
      <IconPlus />
    </button>
  </span>
</template>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  @apply w-4 text-sm font-medium text-center rounded-md;
}
</style>
