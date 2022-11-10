<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home', path: '/' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about', path: '/about' }">About</RouterLink>
    <RouterLink :to="{ name: 'products', path: '/products' }"
      >Products</RouterLink
    >
  </nav>
</template>
