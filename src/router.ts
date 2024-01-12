import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./pages/LoginForm.vue";
import HomePage from "./pages/HomePage.vue";
import SignupForm from "./pages/SignupForm.vue";
import ItemDesc from "./components/items/ItemDesc.vue";
import BestSeller from "./components/product/BestSeller.vue";
import AllProduct from "./components/product/AllProduct.vue";
import HomeMade from "./components/product/HomeMade.vue";
import HolidayItems from "./components/product/HolidayItems.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/account/login", component: LoginForm },
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/account/signup", component: SignupForm },
    { path: "/items/:id", component: ItemDesc },
    { path: "/products/all", component: AllProduct },
    { path: "/products/bestseller", component: BestSeller },
    { path: "/products/homemade", component: HomeMade },
    { path: "/products/holiday", component: HolidayItems },
  ],
});
export default router;
