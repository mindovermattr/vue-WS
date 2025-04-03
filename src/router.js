import { createRouter, createWebHistory } from "vue-router";
import FavoriteView from "./Views/FavoriteView.vue";
import LoginView from "./Views/LoginView.vue";
import MainView from "./Views/MainView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainView, meta: { requiresAuth: true } },
    {
      path: "/favorites",
      component: FavoriteView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to) => {
  const isAuth = localStorage.getItem("auth");
  if (to.meta.requiresAuth && !isAuth) {
    return "/login";
  }
  return true;
});
