<template>
  <div class="fixed top-0 right-0 m-4 z-50">
    <transition name="fade">
      <div
        v-if="showToast"
        class="bg-green-500 p-4 rounded-lg text-white"
        @click="hideToast"
      >
        Added to cart: {{ item.name }} x{{ quantity }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useCartStore } from "../stores/CartStore";

const cartStore = useCartStore();
const showToast = ref(false);

watchEffect(() => {
  if (cartStore.cartItems.length) {
    showToast.value = true;
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
