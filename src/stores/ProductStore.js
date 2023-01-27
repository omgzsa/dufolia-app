import { ref } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

const error = ref(null);
const apiUrl = import.meta.env.VITE_STRAPI_URL;

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
      // product: {},
      productsFeatured: [],
      loading: false,
    };
  },

  actions: {
    async fill() {
      this.loading = true;
      this.products = await fetch(apiUrl + "/api/products?populate=*")
        .then((res) => res.json())
        .then((data) => (this.products = data.data))
        .catch((err) => (error.value = console.log(err)));
      this.loading = false;
    },
    async fillArchive() {
      this.loading = true;
      this.products = await fetch(
        apiUrl +
          "/api/products?fields=name,description,price,slug&populate=image,category"
      )
        .then((res) => res.json())
        .then((data) => (this.products = data.data))
        .catch((err) => (error.value = console.log(err)));
      this.loading = false;
    },
    async fillFeatured() {
      this.productsFeatured = await fetch(
        apiUrl + "/api/products?populate=*&filters[featured][$eq]=true"
      )
        .then((res) => res.json())
        .then((data) => (this.productsFeatured = data.data))
        .catch((err) => (error.value = console.log(err)));
    },
    // async getProduct(productId) {
    //   this.product = await fetch(apiUrl + "/api/products/" + productId)
    //     .then((res) => res.json())
    //     .then((data) => (this.product = data))
    //     .catch((err) => (error.value = console.log(err)));
    // },
  },

  getters: {
    //
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
