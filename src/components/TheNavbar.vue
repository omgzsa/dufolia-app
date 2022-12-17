<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { SearchIcon } from "@heroicons/vue/solid";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

import { useGetImageUrl } from "../composables/getImageUrl";

const image = "dufolia-logo.png";
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="h-8 w-auto"
              :src="useGetImageUrl(image)"
              alt="Dufólia logó"
            />
          </div>
          <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
            <RouterLink
              :to="{ name: 'home', path: '/' }"
              class="border-transparent text-gray-500 hover:border-accent hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2"
            >
              Kezdőoldal
            </RouterLink>
            <RouterLink
              :to="{ name: 'about', path: '/about' }"
              class="border-transparent text-gray-500 hover:border-accent hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2"
            >
              Rólunk
            </RouterLink>
            <RouterLink
              :to="{ name: 'products', path: '/products' }"
              class="border-transparent text-gray-500 hover:border-accent hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2"
            >
              Termékek
            </RouterLink>
          </div>
        </div>
        <div
          class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end"
        >
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <RouterLink
          :to="{ name: 'home', path: '/' }"
          class="border-transparent text-gray-500 block pl-3 pr-4 py-2 border-l-4"
        >
          Kezdőoldal
        </RouterLink>

        <RouterLink
          :to="{ name: 'about', path: '/about' }"
          class="border-transparent text-gray-500 block pl-3 pr-4 py-2 border-l-4"
        >
          Rólunk
        </RouterLink>

        <RouterLink
          :to="{ name: 'products', path: '/products' }"
          class="border-transparent text-gray-500 block pl-3 pr-4 py-2 border-l-4"
        >
          Termékek
        </RouterLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
