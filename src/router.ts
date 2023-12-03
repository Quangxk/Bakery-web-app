import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./pages/LoginForm.vue";
import HomePage from "./components/home/HomePage.vue";
import SignupForm from "./pages/SignupForm.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/account/login", component: LoginForm },
    { path: "/home", component: HomePage },
    { path: "/account/signup", component: SignupForm },
  ],
});

export default router;
