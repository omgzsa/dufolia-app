<script setup>
import { ref } from "vue";
import IconShoppingBag from "./IconShoppingBag.vue";
import AppCountInput from "@/components/AppCountInput.vue";

defineProps({
  product: Object,
  imageLink: String,
});

const count = ref(1);

defineEmits(["addItems"]);
</script>
<template>
  <div class="relative mx-auto max-w-screen-xl pt-24">
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
        <img
          alt=""
          :src="`${imageLink}${product?.attributes?.image.data.attributes.url}`"
          class="aspect-square w-full rounded-xl object-contain p-2 sm:p-4 md:p-10"
        />
      </div>

      <div class="sticky top-0 pt-10">
        <div class="mt-8">
          <div class="max-w-[35ch]">
            <h2 class="text-2xl font-bold">
              {{ product?.attributes?.name }}
            </h2>
            <p class="text-xl font-normal">
              {{ product?.attributes?.price }} Ft
            </p>
          </div>
        </div>

        <details class="group relative mt-4">
          <summary class="block">
            <div class="prose mb-4 max-w-none group-open:hidden">
              <p>
                {{ product?.attributes?.description }}
              </p>
            </div>
          </summary>
        </details>

        <!-- <fieldset>
          <legend class="mb-1 text-sm font-medium">Color</legend>

          <div class="flow-root">
            <div class="-m-0.5 flex flex-wrap">
              <label for="color_tt" class="cursor-pointer p-0.5">
                <input
                  type="radio"
                  name="color"
                  id="color_tt"
                  class="peer sr-only"
                />

                <span
                  class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  Texas Tea
                </span>
              </label>

              <label for="color_fr" class="cursor-pointer p-0.5">
                <input
                  type="radio"
                  name="color"
                  id="color_fr"
                  class="peer sr-only"
                />

                <span
                  class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  Fiesta Red
                </span>
              </label>

              <label for="color_cb" class="cursor-pointer p-0.5">
                <input
                  type="radio"
                  name="color"
                  id="color_cb"
                  class="peer sr-only"
                />

                <span
                  class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  Cobalt Blue
                </span>
              </label>
            </div>
          </div>
        </fieldset> -->

        <!-- <fieldset class="mt-4">
          <legend class="mb-1 text-sm font-medium">Size</legend>

          <div class="flow-root">
            <div class="-m-0.5 flex flex-wrap">
              <label for="size_xs" class="cursor-pointer p-0.5">
                <input
                  type="radio"
                  name="size"
                  id="size_xs"
                  class="peer sr-only"
                />

                <span
                  class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  XS
                </span>
              </label>

              <label for="size_s" class="cursor-pointer p-0.5">
                <input
                  type="radio"
                  name="size"
                  id="size_s"
                  class="peer sr-only"
                />

                <span
                  class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  S
                </span>
              </label>

              <label for="size_m" class="cursor-pointer p-0.5">
                <input
                  type="radio"
                  name="size"
                  id="size_m"
                  class="peer sr-only"
                />

                <span
                  class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  M
                </span>
              </label>

              <label for="size_l" class="cursor-pointer p-0.5">
                <input
                  type="radio"
                  name="size"
                  id="size_l"
                  class="peer sr-only"
                />

                <span
                  class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  L
                </span>
              </label>

              <label for="size_xl" class="cursor-pointer p-0.5">
                <input
                  type="radio"
                  name="size"
                  id="size_xl"
                  class="peer sr-only"
                />

                <span
                  class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                >
                  XL
                </span>
              </label>
            </div>
          </div>
        </fieldset> -->

        <div class="mt-8 flex">
          <AppCountInput v-model="count" />
          <button
            class="flex items-center gap-2 bg-primary-200 text-white font-semibold px-4 py-2 rounded ml-4"
            @click="$emit('addItems', count), (count = 1)"
          >
            <IconShoppingBag />Kosárba rakom
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
