import IRoute from "src/interfaces/route";
import pageNotFound from "src/pages/404";
import login from "src/pages/auth/login";
import register from "src/pages/auth/register";
import dashboard from "src/pages/dashboard/dashboard";
import home from "src/pages/home";
import settings from "src/pages/settings/settings";
import search from "src/pages/dashboard/search";
import discussions from "src/pages/dashboard/discussions";

const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: home,
    name: "Home Page",
    protected: false,
  },
  {
    path: "/dashboard",
    exact: true,
    component: dashboard,
    name: "Dashboard",
    protected: true,
  },
  {
    path: "/register",
    exact: true,
    component: register,
    name: "Register Page",
    protected: false,
  },
  {
    path: "/login",
    exact: true,
    component: login,
    name: "Login Page",
    protected: false,
  },
  {
    path: "/settings",
    exact: true,
    component: settings,
    name: "Settings Page",
    protected: true,
  },
  {
    path: "/dashboard/discussions",
    exact: true,
    component: discussions,
    name: "Discussions Page",
    protected: true,
  },
  {
    path: "/dashboard/search",
    exact: true,
    component: search,
    name: "Search Page",
    protected: true,
  },
  {
    path: "*",
    exact: true,
    component: pageNotFound,
    name: "Page Not Found",
    protected: false,
  },
];

export default routes;
