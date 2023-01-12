<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useGetImageUrl } from "@/composables/getImageUrl";
import ImageCarousel from "@/components/ImageCarousel.vue";

const slides = ref([
  { img: "hero1.webp", alt: "first house" },
  { img: "hero2.webp", alt: "second kitchen" },
  { img: "hero3.webp", alt: "third house" },
]);
</script>

<template>
  <section>
    <div class="mx-auto text-center max-w-2xl py-16">
      <slot name="title"></slot>
      <p class="text-lg text-slate-500 font-semibold mb-12">
        Építkezési alapanyagok egyhelyen. 30 éve hivatásunk, hogy szakmai
        hozzáértésünkkel és minőségi termékeinkkel megkönnyítsük az építkezést.
      </p>
      <RouterLink :to="{ name: 'products', path: '/products' }">
        <button
          class="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary-100 text-primary-100"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <span
            class="flex flex-row gap-2 relative text-primary-100 transition duration-300 group-hover:text-white ease"
            >Termékeink</span
          >
        </button>
      </RouterLink>
    </div>
    <div
      class="hidden md:flex flex-row gap-6 justify-between py-10 [&>*:nth-child(even)]:-mt-12"
    >
      <div v-for="slide in slides" :key="slide.img">
        <img :src="useGetImageUrl(slide.img)" :alt="slide.alt" />
      </div>
    </div>
    <ImageCarousel class="block md:hidden" :slides="slides" />
  </section>
</template>
