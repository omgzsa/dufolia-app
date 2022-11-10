import { ref } from "vue";
import { defineStore } from "pinia";

const error = ref(null);
const apiUrl = import.meta.env.VITE_STRAPI_URL;

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
      productsFeatured: [],
    };
  },

  actions: {
    async fill() {
      this.products = await fetch(apiUrl + "/api/products?populate=*")
        .then((res) => res.json())
        .then((data) => (this.products = data.data))
        .catch((err) => (error.value = console.log(err)));
    },
    async fillFeatured() {
      this.productsFeatured = await fetch(
        apiUrl + "/api/products?populate=*&filters[featured][$eq]=true"
      )
        .then((res) => res.json())
        .then((data) => (this.productsFeatured = data.data))
        .catch((err) => (error.value = console.log(err)));
    },
  },

  getters: {
    // featured(state) {
    //   return state.products.data.filter((product) => product.featured);
    // },
  },
});
