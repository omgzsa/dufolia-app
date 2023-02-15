import { ref } from "vue";
import { defineStore } from "pinia";

const error = ref(null);
const apiUrl = import.meta.env.VITE_STRAPI_URL;

export const useCategoryStore = defineStore("CategoryStore", {
  state: () => {
    return {
      categories: [],
      loading: false,
      selectedCategories: [],
    };
  },

  actions: {
    async fillCategories() {
      this.categories = await fetch(
        apiUrl + "/api/categories?fields=name&populate=products,image"
      )
        .then((res) => res.json())
        .then((data) => (this.categories = data.data))
        .catch((err) => (error.value = err));
    },
    async fill() {
      this.loading = true;
      this.categories = await fetch(apiUrl + "/api/categories?fields=name,slug")
        .then((res) => res.json())
        .then((data) => (this.categories = data.data))
        .catch((err) => (error.value = err));
      this.loading = false;
    },
  },

  getters: {
    //
  },
});
