import { acceptHMRUpdate, defineStore } from "pinia";
import { useProductStore } from "./ProductStore";

const productStore = useProductStore();

export const useFilterStore = defineStore("FilterStore", {
  state: () => {
    return {
      //
    };
  },
  actions: {
    toggleOrder: () => {
      //
    },
  },
  getters: {
    ascendingByPrice: () => {
      productStore.products.sort((a, b) =>
        a.attributes.price > b.attributes.price ? 1 : -1
      );
    },
    descendingByPrice: () => {
      productStore.products.sort((a, b) =>
        a.attributes.price < b.attributes.price ? 1 : -1
      );
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFilterStore, import.meta.hot));
}
