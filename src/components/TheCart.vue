<script setup>
// import { ref } from 'vue';
import { useCartStore } from "../stores/CartStore";
import TheCartItem from "./TheCartItem.vue";
// import IconShoppingBag from "@/components/IconShoppingBag.vue";
import AppLink from "./AppLink.vue";
// import IconRedo from "./icons/IconRedo.vue";
// import IconUndo from "./icons/IconUndo.vue";
const cartStore = useCartStore();
</script>

<template>
  <div
    class="flex mx-auto relative flex-col max-w-md sm:max-w-2xl space-y-4 sm:p-10"
  >
    <div
      class="flex flex-col py-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100"
    >
      <h2 class="text-2xl tracking-wide font-semibold">Kosár</h2>
      <!-- <div class="flex flex-row">
        <IconShoppingBag class="mr-2" />
        <span class="text-base font-semibold">{{ cartStore.count }}</span>
      </div> -->
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
          Teljes összeg:
          <span class="font-semibold">{{ cartStore.cartTotal }} Ft</span>
        </p>
        <p class="text-xs sm:text-sm text-gray-400">
          Az ár az áfá-t és a szállítási költséget nem tartalmazza.
        </p>
      </div>

      <!-- CLEAR / CHECKOUT -->
      <div class="flex justify-end">
        <button
          @click="cartStore.clearCart"
          type="button"
          class="text-xs sm:text-base rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-gray-400 text-gray-400 text-white"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="relative text-gray-400 transition duration-300 group-hover:text-white ease"
            >Kosár kiürítése</span
          >
          <!-- <span class="sr-only sm:not-sr-only">the cart</span> -->
        </button>
        <AppLink
          type="button"
          :to="{ name: 'checkout' }"
          class="text-xs sm:text-base rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary-100 text-primary-100 text-white"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="relative text-primary-100 transition duration-300 group-hover:text-white ease"
            >Tovább a fizetéshez</span
          >
        </AppLink>
      </div>
    </div>
  </div>
</template>
