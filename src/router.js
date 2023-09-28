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
    component: LoginPage
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
router.beforeEach((to,from,next)=>{
  axios.get(`${store.state.apiURL}/auth/valid`)
  .then((res) => {
    if (res.data.message == "Success") {
      if(to.path=='/'){
        next('/dashboard')
      }else{
        next()
      }
    }else{
      if(to.path=='/'){
        next()
      }else{
        next('/')
      }
    }
  })
  .catch(() => {
    return false;
  })
})
export default router; 