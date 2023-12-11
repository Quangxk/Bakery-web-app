import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./pages/LoginForm.vue";
import HomePage from "./pages/HomePage.vue";
import SignupForm from "./pages/SignupForm.vue";
import ChocolateCake from "./components/items/ChocolateCake.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/account/login", component: LoginForm },
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/account/signup", component: SignupForm },
    { path: "/items/chocolatecake", component: ChocolateCake },
  ],
});
export default router;
