import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredients from "../views/MealsByIngredient.vue";
import MealsByName from "../views/MealsByName.vue";
import MealDetail from "../views/MealDetail.vue";
import DefaltLayout from "../components/DefaltLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

const routes = [
  {
    path: '/guest/',
    component: GuestLayout,
  },
  {
    path: "/",
    component: DefaltLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredients,
      },
      {
        path: '/meal/:id',
        name: "mealDetail",
        component: MealDetail
      }
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
