import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./pages/LoginForm.vue";
import HomePage from "./pages/HomePage.vue";
import SignupForm from "./pages/SignupForm.vue";
import ItemDesc from "./components/items/ItemDesc.vue";
import BasePage from "./components/UI/BasePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/account/login", component: LoginForm },
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/account/signup", component: SignupForm },
    { path: "/items/:id", component: ItemDesc },
    { path: "/all", component: BasePage },
  ],
});
export default router;
