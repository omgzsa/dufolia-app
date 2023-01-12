import { ref } from "vue";
import { defineStore } from "pinia";

const error = ref(null);

export const useCategoryStore = defineStore("CategoryStore", {
  state: () => {
    return {
      categories: [],
    };
  },

  actions: {
    async fillCategories() {
      this.categories = await fetch(
        "http://localhost:1337/api/categories?fields=name&populate=products,image"
      )
        .then((res) => res.json())
        .then((data) => (this.categories = data.data))
        .catch((err) => (error.value = err));
    },
  },

  getters: {
    //
  },
});
