import { ref } from "vue";
// import { useCategoryStore } from "./CategoryStore";
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
      selected: [],
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
          "/api/products?fields=name,featured,description,price,slug&populate=image,category"
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
    ascendingPrice() {
      this.products.sort((a, b) =>
        a.attributes.price > b.attributes.price ? 1 : -1
      );
    },
    descendingPrice() {
      this.products.sort((a, b) =>
        a.attributes.price < b.attributes.price ? 1 : -1
      );
    },
    filterByCategory() {},
  },

  getters: {
    count: (state) => state.products.length,
    getFeatured: (state) =>
      state.products.filter((product) => {
        return product.attributes.featured === true;
      }),
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
