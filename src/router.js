import { createWebHistory, createRouter } from "vue-router";
import store from "@/store.js";
import axios from 'axios';
import LoginPage from "./components/LoginPage";
import AuthenticatedView from "./components/AuthenticatedView"
import DashboardPage from "./components/Authenticated/DashboardPage";
import DevicesPage from "./components/Authenticated/DevicesPage";
import UsersPage from "./components/Authenticated/UsersPage";
import LogsPage from "./components/Authenticated/LogsPage";
import InfoPage from "./components/Authenticated/InfoPage";
import AdminsPage from "./components/Authenticated/AdminsPage";
import AuditsPage from "./components/Authenticated/AuditsPage";


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
      },
      {
        path: "users",
        component: UsersPage,
      },
      {
        path: "logs",
        component: LogsPage,
      },
      {
        path: "info",
        component: InfoPage,
      },
      {
        path: "admins",
        component: AdminsPage,
      },
      {
        path: "audits",
        component: AuditsPage,
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
      store.state.clientData = res.data.data
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