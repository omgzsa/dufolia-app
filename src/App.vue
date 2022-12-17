<script setup>
import { RouterView } from "vue-router";
import TheFooter from "@/components/TheFooter.vue";
// import TheNavbar from "@/components/TheNavbar.vue"; // onClickOutside not working
import TheRealNavbar from "./components/TheRealNavbar.vue";
</script>

<template>
  <header>
    <!-- <TheNavbar /> -->
    <TheRealNavbar />
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </main>

  <TheFooter />
</template>
