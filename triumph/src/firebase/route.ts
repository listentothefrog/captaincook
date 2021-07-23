import Route from "../interfaces/route.interface";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
// import UserProfile from "../pages/UserProfile"
import HomePage from "../App";

export const routes: Route[] = [
  {
    path: "/",
    exact: true,
    component: HomePage,
    name: "Home Page",
    protected: false,
  },
  {
    path: "/dash",
    exact: true,
    component: Dashboard,
    name: "Dashboard",
    protected: true,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    name: "Login",
    protected: false,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
    name: "Login",
    protected: false,
  },
];
