<script setup>
import { RouterLink, useRoute } from "vue-router";

import IconArrowRight from "./IconArrowRight.vue";
import IconHome from "./IconHome.vue";

const route = useRoute();
</script>

<template>
  <nav aria-label="Breadcrumb" class="md:ml-5">
    <ol
      role="list"
      class="flex items-center gap-1 md:ml-5 text-sm text-gray-600"
    >
      <li class="flex items-center">
        <RouterLink :to="{ name: 'home' }" class="block hover:text-accent">
          <IconHome />
        </RouterLink>
      </li>
      <li class="flex items-center">
        <IconArrowRight />
        <RouterLink
          :to="{ name: 'products' }"
          class="block ml-2 hover:text-accent"
        >
          Termékek
        </RouterLink>
      </li>
      <li class="flex items-center" v-if="route.name == 'product.single'">
        <IconArrowRight class="mr-2" />

        {{ route.params.slug }}
      </li>
    </ol>
  </nav>
</template>
