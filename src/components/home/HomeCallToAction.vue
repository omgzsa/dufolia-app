<script setup>
import { ref } from "vue";
import { useGetImageUrl } from "../../composables/getImageUrl";
// import IconCheck from "../IconCheck.vue";
import IconCheck from "../icons/IconCheck.vue";
import { RouterLink } from "vue-router";

const featureList = ref([
  { id: 1, text: "Folyamatos kedvezmények" },
  { id: 2, text: "Állandó minőség" },
  { id: 3, text: "Személyre szabott értékesítési rendszer" },
  { id: 4, text: "Szakmai támogatás" },
]);

const image = "illustration-house.webp";
</script>

<template>
  <div
    class="grid grid-cols-1 place-items-center px-2 gap-y-12 md:grid-cols-2 md:gap-y-0 md:gap-x-16"
  >
    <img
      :src="useGetImageUrl(image)"
      alt="színes illusztráció egy családi házról"
      class="self-start"
    />
    <div class="flex flex-col items-center md:block">
      <h2 class="text-center md:text-left">A modern házak szakértője</h2>
      <ul class="grid place-content-start md:place-content-start mb-8">
        <li
          v-for="item in featureList"
          :key="item.id"
          class="flex gap-2 mb-2 text-sm md:text-base text-slate-500 font-normal"
        >
          <IconCheck />{{ item.text }}
        </li>
      </ul>
      <RouterLink :to="{ name: 'products', path: '/products' }">
        <button
          class="rounded-md px-4 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary-100 text-primary-100"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="flex flex-row gap-2 relative text-primary-100 transition duration-300 group-hover:text-white ease"
            >Megnézem a termékeket</span
          >
        </button>
      </RouterLink>
    </div>
  </div>
</template>
