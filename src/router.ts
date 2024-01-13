import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./pages/LoginForm.vue";
import HomePage from "./pages/HomePage.vue";
import SignupForm from "./pages/SignupForm.vue";
import ItemDesc from "./components/items/ItemDesc.vue";
import BestSeller from "./components/products/pastries/BestSeller.vue";
import AllProduct from "./components/products/pastries/AllProduct.vue";
import HomeMade from "./components/products/pastries/HomeMade.vue";
import HolidayItems from "./components/products/pastries/HolidayItems.vue";
import AllDrink from "./components/products/AllDrink.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/account/login", component: LoginForm },
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/account/signup", component: SignupForm },
    { path: "/items/:id", component: ItemDesc },
    { path: "/pastries/all", component: AllProduct },
    { path: "/pastries/bestseller", component: BestSeller },
    { path: "/pastries/homemade", component: HomeMade },
    { path: "/pastries/holiday", component: HolidayItems },
    { path: "/drinks", component: AllDrink },
  ],
});
export default router;
