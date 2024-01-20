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
import AccountDetail from "./pages/AccountDetail.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/account/login", component: LoginForm, props: true },
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/account/signup", component: SignupForm, props: true },
    { path: "/items/:id", component: ItemDesc },
    { path: "/pastries/all", component: AllProduct },
    { path: "/pastries/bestseller", component: BestSeller },
    { path: "/pastries/homemade", component: HomeMade },
    { path: "/pastries/holiday", component: HolidayItems },
    { path: "/drinks", component: AllDrink },
    { path: "/account/details", component: AccountDetail },
  ],
});
export default router;
