<script setup>
import { ref } from "vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import AppButton from "@/components/AppButton.vue";

const slides = ref([
  { img: "hero1.jpg", alt: "first house" },
  { img: "hero2.jpg", alt: "second kitchen" },
  { img: "hero3.jpg", alt: "third house" },
]);
</script>

<template>
  <div>
    <div class="mx-auto text-center max-w-2xl py-16">
      <slot name="title"></slot>
      <p class="text-lg text-slate-500 font-semibold mb-10">
        Építkezési alapanyagok egyhelyen. 30 éve hivatásunk, hogy szakmai
        hozzáértésünkkel és minőségi termékeinkkel megkönnyítsük az építkezést.
      </p>
      <AppButton> Termékeink </AppButton>
    </div>
    <ImageCarousel :slides="slides" />
  </div>
</template>
