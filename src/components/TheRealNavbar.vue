<script setup>
import { onMounted, onUnmounted, ref } from "vue";

// helpers
import { useGetImageUrl } from "../composables/getImageUrl";
import { onClickOutside } from "@vueuse/core";

// store
import { useCartStore } from "../stores/CartStore";

// icons
import IconMagnify from "./icons/IconMagnify.vue";
import IconMenu from "./icons/IconMenu.vue";
import IconShoppingBag from "./icons/IconShoppingBag.vue";
import IconAccount from "./icons/IconAccount.vue";

const image = "dufolia-logo.png";
const cartStore = useCartStore();

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
const closeMenu = () => (showMenu.value = false);
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

const target = ref(null);

onClickOutside(target, () => (showMenu.value = false));

function onScroll() {
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;
  if (currentScrollPosition < 0) {
    return;
  }
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
    return;
  }
  showNavbar.value = currentScrollPosition < lastScrollPosition.value;
  lastScrollPosition.value = currentScrollPosition;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <nav
    class="navbar max-w-full md:flex md:items-center px-2 sm:px-6 lg:px-8"
    :class="{ 'navbar--hidden': !showNavbar }"
    ref="target"
  >
    <!-- MOBILE MENU -->
    <div class="flex items-center justify-between space-x-2 py-2">
      <!-- MOBILE LOGO -->
      <AppLink to="/" class="mr-auto">
        <img
          :src="useGetImageUrl(image)"
          alt="Dufolia logo"
          class="w-28 md:pr-2"
        />
      </AppLink>

      <!-- MOBILE CART -->
      <div class="sm:p-1 order-2 md:hidden flex flex-row items-center">
        <AppLink :to="{ name: 'cart', path: '/cart' }">
          <span
            class="text-base font-semibold flex flex-row items-center"
            :class="{ 'text-accent': cartStore.count !== 0 }"
            ><IconShoppingBag class="mr-1" /> {{ cartStore.count }}</span
          >
        </AppLink>
      </div>

      <!-- MOBILE MENU -->
      <div @click="toggleNav" class="sm:p-1 flex md:hidden order-4">
        <button
          type="button"
          class="text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 pl-1"
        >
          <IconMenu />
        </button>
      </div>

      <!-- MOBILE USER -->
      <div class="sm:p-1 order-3 md:hidden">
        <AppLink :to="{ name: 'user' }">
          <IconAccount
            class="text-gray-700 hover:font-semibold hover:text-primary-100"
          />
        </AppLink>
      </div>

      <!-- MOBILE SEARCH -->
      <div class="sm:p-1 md:hidden">
        <IconMagnify />
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      @click="closeMenu"
      :class="showMenu ? 'flex' : 'hidden'"
      class="ml-auto flex-col py-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-4 lg:space-x-12 md:mt-0"
    >
      <AppLink
        :to="{ name: 'home', path: '/' }"
        class="border-transparent text-gray-500 block pr-4 py-2 border-l-4 hover:font-semibold hover:text-primary-100"
        >Kezdőoldal</AppLink
      >
      <AppLink
        :to="{ name: 'about', path: '/about' }"
        class="border-transparent text-gray-500 block pr-4 py-2 border-l-4 hover:font-semibold hover:text-primary-100"
        >Rólunk</AppLink
      >
      <AppLink
        :to="{ name: 'products', path: '/products' }"
        class="border-transparent text-gray-500 block pr-4 py-2 border-l-4 hover:font-semibold hover:text-primary-100"
        >Termékek</AppLink
      >
    </ul>

    <!-- RIGHT ICONS - search/cart/profile -->
    <div class="md:flex md:space-y-0 md:flex-row md:items-center ml-auto">
      <!-- SEARCH BAR - DESKTOP -->
      <div class="relative hidden md:block p-1">
        <IconMagnify />
      </div>

      <!-- SHOPPING CART - DESKTOP -->
      <div class="md:block hidden p-1">
        <AppLink :to="{ name: 'cart', path: '/cart' }">
          <span
            class="text-base font-semibold flex flex-row items-center text-gray-900"
            :class="{ 'text-accent': cartStore.count !== 0 }"
            ><IconShoppingBag class="mr-1" />{{ cartStore.count }}</span
          >
        </AppLink>
      </div>

      <!-- USER - DESKTOP -->
      <div class="hidden md:block pl-1 py-1">
        <AppLink :to="{ name: 'user' }">
          <IconAccount
            class="text-gray-700 hover:font-semibold hover:text-primary-100"
          />
        </AppLink>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  width: 100vw;
  background: #fff;
  border-bottom: 1px solid grey;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.15s all ease-out;
  z-index: 1;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
