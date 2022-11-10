<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useGetImageUrl } from "../composables/getImageUrl";

defineProps({
  slides: Object,
});
</script>

<template>
  <carousel class="text-center">
    <slide v-for="slide in slides" :key="slide.alt">
      <div class="carousel__item">
        <img :src="useGetImageUrl(slide.img)" :alt="slide.alt" />
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style>
.carousel {
  padding-left: 0px;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid rgb(40, 207, 187); */
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
