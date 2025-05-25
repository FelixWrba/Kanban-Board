// import { createMemoryHistory, createRouter } from "vue-router";

// import HomeView from "../views/HomeView.vue";
// import SettingsView from "../views/SettingsView.vue";

// const routes = [
//   { path: "/", component: HomeView },
//   { path: "/settings", component: SettingsView },
// ];

// export const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// });

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
    },
    {
      path: "/imprint",
      name: "imprint",
      component: () => import("../views/ImprintView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () =>import('../views/AboutView.vue'),
    },
    {
      path:"/:pathMatch(.*)",
      name: "not found",
      component: () => import("../views/NotFound.vue"),
    }
  ],
});
