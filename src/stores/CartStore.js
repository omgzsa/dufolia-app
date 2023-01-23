import { acceptHMRUpdate, defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { groupBy } from "lodash";
import { useAuthUserStore } from "./AuthUserStore";

export const useCartStore = defineStore("CartStore", {
  historyEnabled: true,
  // state
  state: () => {
    return {
      cartItems: useLocalStorage("CartStore:cartItems", []),
    };
  },
  actions: {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(
        `${authUserStore.username} just bought ${this.count} items at a total of ${this.cartTotal}`
      );
    },
    addItems(count, item) {
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.cartItems.push({ ...item });
      }
    },
    clearItem(itemName) {
      this.cartItems = this.cartItems.filter(
        (item) => item.attributes.name !== itemName
      );
    },
    setItemCount(item, count) {
      this.clearItem(item.attributes.name);
      this.addItems(count, item);
    },
    clearCart() {
      this.cartItems.length = 0;
    },
  },

  getters: {
    count: (state) => state.cartItems.length,
    isEmpty: (state) => state.count === 0,
    grouped: (state) => {
      const grouped = groupBy(state.cartItems, (item) => item.attributes.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    groupCount: (state) => (id) => state.grouped[id].length,
    cartTotal: (state) =>
      state.cartItems.reduce((p, c) => p + c.attributes.price, 0),
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
