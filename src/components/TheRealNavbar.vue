<script setup>
import { onMounted, onUnmounted, ref } from "vue";

// helpers
import { useGetImageUrl } from "../composables/getImageUrl";
import { onClickOutside } from "@vueuse/core";

// store
import { useCartStore } from "../stores/CartStore";

// icons
import IconMagnify from "./IconMagnify.vue";
import IconMenu from "./IconMenu.vue";
import IconShoppingBag from "./IconShoppingBag.vue";

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
    class="navbar max-w-full md:flex md:justify-between md:items-center px-2 sm:px-6 lg:px-8"
    :class="{ 'navbar--hidden': !showNavbar }"
    ref="target"
  >
    <div class="flex items-center justify-between space-x-2 py-2">
      <!-- LOGO -->
      <AppLink to="/">
        <img
          :src="useGetImageUrl(image)"
          alt="Dufolia logo"
          class="w-28 md:pr-2"
        />
      </AppLink>

      <!-- CART BUTTON -->
      <div class="order-2 md:hidden flex flex-row items-center">
        <AppLink
          :to="{ name: 'cart', path: '/cart' }"
          class="flex flex-row items-center"
        >
          <IconShoppingBag class="mr-1" />
          <span
            class="text-base font-semibold"
            :class="{ 'text-accent': cartStore.count !== 0 }"
            >{{ cartStore.count }}</span
          >
        </AppLink>
      </div>

      <!-- MOBILE MENU BUTTON -->
      <div @click="toggleNav" class="flex md:hidden order-3 pr-2">
        <button
          type="button"
          class="text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 pl-1"
        >
          <IconMenu />
        </button>
      </div>

      <!-- SEARCH BAR -->
      <div class="m-w-36 relative md:hidden">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
        >
          <IconMagnify />
        </div>
        <input
          type="text"
          id="search-navbar"
          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      @click="closeMenu"
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col py-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
    >
      <AppLink
        :to="{ name: 'home', path: '/' }"
        class="border-transparent text-gray-500 block pl-3 pr-4 py-2 border-l-4 hover:font-semibold hover:text-accent"
        >Kezdőoldal</AppLink
      >
      <AppLink
        :to="{ name: 'about', path: '/about' }"
        class="border-transparent text-gray-500 block pl-3 pr-4 py-2 border-l-4 hover:font-semibold hover:text-accent"
        >Rólunk</AppLink
      >
      <AppLink
        :to="{ name: 'products', path: '/products' }"
        class="border-transparent text-gray-500 block pl-3 pr-4 py-2 border-l-4 hover:font-semibold hover:text-accent"
        >Termékek</AppLink
      >
    </ul>

    <!-- SEARCH BAR - DESKTOP -->
    <div class="relative hidden md:block">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <IconMagnify />
      </div>
      <input
        type="text"
        id="search-navbar"
        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>

    <div class="order-3 md:block hidden">
      <AppLink
        :to="{ name: 'cart', path: '/cart' }"
        class="flex flex-row items-center"
      >
        <IconShoppingBag class="mr-1" />
        <span
          class="text-base font-semibold"
          :class="{ 'text-accent': cartStore.count !== 0 }"
          >{{ cartStore.count }}</span
        >
      </AppLink>
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
