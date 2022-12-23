<script setup>
import { ref } from "vue";
import { useGetImageUrl } from "@/composables/getImageUrl";
import ImageCarousel from "@/components/ImageCarousel.vue";

const slides = ref([
  { img: "hero1.jpg", alt: "first house" },
  { img: "hero2.jpg", alt: "second kitchen" },
  { img: "hero3.jpg", alt: "third house" },
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
      <AppButton :to="{ name: 'products' }"> Termékeink </AppButton>
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
