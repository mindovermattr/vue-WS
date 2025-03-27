import { createRouter, createWebHistory } from "vue-router";
import FavoriteView from "./Views/FavoriteView.vue";
import MainView from "./Views/MainView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainView },
    {
      path: "/favorites",
      component: FavoriteView,
    },
  ],
});
