import { createWebHistory, createRouter } from "vue-router";
import store from "@/store.js";
import axios from 'axios';
import LoginPage from "./components/LoginPage";
import AuthenticatedView from "./components/AuthenticatedView"
import DashboardPage from "./components/DashboardPage";
import DevicesPage from "./components/DevicesPage";

const routes = [
  {
    path: "/",
    component: LoginPage,
    beforeEnter: (to,from,next) => {
      axios.get(`${store.state.apiURL}/auth/valid`)
        .then((res) => {
          if (res.data.message == "Success") {
            next('/dashboard')
          }else{
            next()
          }
        })
        .catch(() => {
          return false;
        })
    }
  },
  {
    path: "/",
    component: AuthenticatedView,
    beforeEnter: (to,from,next) => {
      axios.get(`${store.state.apiURL}/auth/valid`)
        .then((res) => {
          if (res.data.message == "Success") {
            next()
          }else{
            next('/')
          }
        })
        .catch(() => {
          return false;
        })
    },
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