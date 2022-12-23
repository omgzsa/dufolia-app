<script setup>
import { ref } from "vue";
import IconShoppingBag from "./IconShoppingBag.vue";

defineProps({
  product: Object,
  imageLink: String,
});

const count = ref(1);

defineEmits(["addItems"]);
</script>

<template>
  <section>
    <div class="relative">
      <div
        class="grid grid-cols-1 items-start md:items-center gap-4 sm:grid-cols-2"
      >
        <img
          :alt="product?.attributes?.name"
          :src="`${imageLink}${product?.attributes?.image.data.attributes.url}`"
          class="m-w-full lg:max-w-lg md:mt-4 max-h-64 md:max-h-96 mx-auto rounded-xl object-contain"
        />

        <div class="sticky top-0">
          <div class="mt-4">
            <div class="max-w-[40ch]">
              <h2 class="text-2xl md:text-4xl font-semibold">
                {{ product?.attributes?.name }}
              </h2>
              <p class="text-lg md:text-2xl font-medium mb-6">
                {{ product?.attributes?.price }} Ft
              </p>
            </div>
          </div>

          <summary class="block">
            <div class="prose mb-4 max-w-none group-open:hidden">
              <p class="text-sm md:text-base md:max-w-md">
                {{ product?.attributes?.description }}
              </p>
            </div>
          </summary>

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
            <AppCountInput
              v-model="count"
              class="space-x-1 border border-primary-100 rounded-md px-3 md:px-4"
            />
            <button
              class="flex items-center gap-2 bg-primary-200 text-white font-semibold px-3 py-2 md:px-6 md:py-3 rounded ml-4"
              @click="$emit('addItems', count), (count = 1)"
            >
              <IconShoppingBag />Kosárba rakom
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
