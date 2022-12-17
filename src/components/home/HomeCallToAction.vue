<script setup>
import { ref } from "vue";
import { useGetImageUrl } from "../../composables/getImageUrl";
import IconCheck from "../IconCheck.vue";

const featureList = ref([
  { id: 1, text: "Folyamatos kedvezmények" },
  { id: 2, text: "Állandó minőség" },
  { id: 3, text: "Személyre szabott értékesítési rendszer" },
  { id: 4, text: "Szakmai támogatás" },
]);

const image = "illustration-house.png";
</script>

<template>
  <div
    class="grid grid-cols-1 place-items-center gap-y-12 md:grid-cols-2 md:gap-y-0 md:gap-x-8"
  >
    <img
      :src="useGetImageUrl(image)"
      alt="színes illusztráció egy családi házról"
    />
    <div class="">
      <h2 class="text-center md:text-left">A modern házak szakértője</h2>
      <ul class="grid place-content-start md:place-content-start mb-10">
        <li
          v-for="item in featureList"
          :key="item.id"
          class="flex gap-2 mb-2 text-sm sm:text-base text-slate-500 font-semibold"
        >
          <IconCheck />{{ item.text }}
        </li>
      </ul>
      <AppButton :to="{ name: 'products' }">Megnézem a termékeket</AppButton>
    </div>
  </div>
</template>
