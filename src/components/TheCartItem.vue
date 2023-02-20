<script setup>
import IconTrash from "./icons/IconTrash.vue";
import { useGetProductImage } from "@/composables/useGetProductImage";

defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>

<template>
  <li class="flex flex-col py-4 sm:flex-row sm:justify-between">
    <div class="flex w-full space-x-2 sm:space-x-4">
      <img
        class="flex-shrink-0 object-contain w-20 h-20 dark:border-transparent rounded outline-none md:w-24 md:h-24 dark:bg-gray-500"
        :src="useGetProductImage(product.attributes.image.data.attributes.url)"
        :alt="product.attributes.name"
      />
      <div class="flex flex-col justify-between w-full pb-2">
        <div class="flex justify-between w-full pb-2 space-x-2">
          <div class="space-y-1">
            <h4>
              {{ product.attributes.name }}
            </h4>
          </div>
          <div class="text-right flex flex-col w-1/3 items-end">
            <p class="text-sm font-medium sm:text-base">
              {{ count * product.attributes.price }} Ft
            </p>
            <AppCountInput
              class="space-x-1"
              :model-value="count"
              @update:modelValue="$emit('updateCount', $event)"
            />
          </div>
        </div>
        <div class="flex text-sm divide-x">
          <button
            @click="$emit('clear')"
            type="button"
            class="flex items-center px-2 py-1 pl-0 space-x-1 font-normal sm:font-medium tracking-widest uppercase text-xs text-gray-500 hover:text-red-500 hover:font-semibold"
          >
            <IconTrash class="text-sm" />
            <span>Törlés</span>
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
