import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_STRAPI_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        breadcrumb: "home",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        breadcrumb: "about",
      },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
      meta: {
        breadcrumb: "products",
      },
    },
    {
      path: "/products/:id/:slug",
      name: "product.single",
      component: () => import("../views/ProductSingleView.vue"),
      meta: {
        breadcrumb: "product",
      },
      // async beforeEnter(to) {
      //   const productStore = useProductStore();
      //   const exists = productStore.products.find(
      //     (product) => product.id === to.params.id
      //   );
      //   if (!exists) return { name: "notfound" };
      // },
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
      meta: {
        breadcrumb: "user",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        breadcrumb: "login",
      },
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
      meta: {
        breadcrumb: "cart",
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutView.vue"),
      meta: {
        breadcrumb: "checkout",
      },
    },

    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ top: 0, behavior: "smooth" });
        }
      }, 600);
    });
  },
});

export default router;
