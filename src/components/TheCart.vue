<script setup>
// import { ref } from 'vue';
import { useCartStore } from "../stores/CartStore";
import TheCartItem from "./TheCartItem.vue";
import IconShoppingBag from "@/components/IconShoppingBag.vue";
// import IconRedo from "@/components/IconRedo.vue";
// import IconUndo from "@/components/IconUndo.vue";
const cartStore = useCartStore();
</script>

<template>
  <div class="flex mx-auto relative flex-col max-w-2xl space-y-4 sm:p-10">
    <div
      class="flex flex-col max-w-3xl py-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100"
    >
      <h2 class="text-xl font-semibold">Your cart</h2>
      <div class="flex flex-row">
        <IconShoppingBag class="mr-2" />
        <span class="text-base font-semibold">{{ cartStore.count }}</span>
      </div>
      <!-- CART LIST -->
      <div v-if="!cartStore.isEmpty">
        <ul class="flex flex-col divide-y divide-gray-300">
          <TheCartItem
            v-for="(items, name) in cartStore.grouped"
            :key="name"
            :product="items[0]"
            :count="cartStore.groupCount(name)"
            @updateCount="cartStore.setItemCount(items[0], $event)"
            @clear="cartStore.clearItem(name)"
          />
        </ul>
      </div>
      <div v-else><em>Cart is Empty</em></div>

      <!-- <div class="flex items-center justify-end">
        <button
          class="py-2 px-2 border border-white hover:text-primary-100 hover:border-primary-100 rounded mr-4"
          @click="cartStore.undo"
        >
          <IconUndo />
        </button>
        <button
          class="py-2 px-2 border border-white hover:text-primary-100 hover:border-primary-100 rounded"
          @click="cartStore.redo"
        >
          <IconRedo />
        </button>
      </div> -->

      <!-- TOTAL AMOUNT -->
      <div class="space-y-1 text-right">
        <p>
          Total amount:
          <span class="font-semibold">{{ cartStore.cartTotal }} Ft</span>
        </p>
        <p class="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>

      <!-- CLEAR / CHECKOUT -->
      <div class="flex justify-end space-x-4">
        <button
          @click="cartStore.clearCart"
          type="button"
          class="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Clear
          <span class="sr-only sm:not-sr-only">the cart</span>
        </button>
        <button
          type="button"
          @click="cartStore.checkout"
          class="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          <span class="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  </div>
</template>
