<script setup>
import { ref } from "vue";
import HomeHero from "../components/home/HomeHero.vue";
import ProductFeatured from "../components/home/HomeProductFeatured.vue";
import HomeCategoriesList from "../components/home/HomeCategoriesList.vue";
import HomeBenefitsList from "../components/home/HomeBenefitsList.vue";

const imageLink = import.meta.env.VITE_STRAPI_URL;

const benefits = ref([
  {
    title: "Rugalmas logisztikai megoldások",
    img: "icon-logistics.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa urus gravida.",
  },
  {
    title: "Folyamatosan bővülő termékkínálat",
    img: "icon-products.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa urus gravida.",
  },
  {
    title: "Kiváló minőségű építőanyagok",
    img: "icon-quality.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa urus gravida.",
  },
  {
    title: "30 év szakmai tapasztalat",
    img: "icon-experience.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa urus gravida.",
  },
]);
</script>

<template>
  <div>
    <!-- HERO SECTION -->
    <section>
      <HomeHero>
        <template #title>
          <h1>Házfelújítás, építkezés egyszerűen, igényeidre szabva</h1>
        </template>
      </HomeHero>
    </section>
    <!-- FEATURED PRODUCTS -->
    <section>
      <h2 class="text-center mb-16">Kiemelt termékeink</h2>
      <ProductFeatured class="px-2 py-2" :image-link="imageLink" />
    </section>
    <!-- CATEGORIES -->
    <section>
      <h2 class="text-center mb-16">Kategóriák</h2>
      <HomeCategoriesList :imageLink="imageLink" />
    </section>
    <!-- BENEFITS -->
    <section>
      <h2 class="text-center mb-16">Miért válaszd a dufóliát?</h2>
      <HomeBenefitsList :benefits="benefits" />
    </section>
  </div>
</template>
