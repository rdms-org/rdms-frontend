import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "./components/LoginPage";
import AuthenticatedView from "./components/AuthenticatedView"
import DashboardPage from "./components/DashboardPage";
import DevicesPage from "./components/DevicesPage";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/",
    component: AuthenticatedView,
    children: [
      {
        path: "dashboard",
        component: DashboardPage,
      },
      {
        path: "devices",
        component: DevicesPage,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 