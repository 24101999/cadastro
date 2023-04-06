import { createRouter, createWebHistory } from "vue-router";
import Page from "../views/Page";
import Login from "../views/Login";
import Cadastro from "../views/Cadastro";

const routes = [
  {
    path: "/page",
    name: "Page",
    component: Page,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
