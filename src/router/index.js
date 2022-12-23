import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      // children: [
      //   {
      //     path: "/products/:id",
      //     component: () => import("../views/ProductSingleView.vue"),
      //   },
      // ],
    },
    {
      path: "/products/:id/:slug",
      name: "product.single",
      component: () => import("../views/ProductSingleView.vue"),
      meta: {
        breadcrumb: "product",
      },
      // beforeEnter(to, from) {
      //   const exists = productStore.products.find(
      //     (product) => product.id === to.params.id
      //   );
      //   if (!exists) return { name: "notfound" };
      // },
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
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { behavior: "smooth" };
  },
});

export default router;
