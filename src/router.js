import { createMemoryHistory, createRouter } from "vue-router";
import MainView from "./Views/MainView.vue";

const routes = [{ path: "/", component: MainView }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
