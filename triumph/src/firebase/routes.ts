import IRoute from "src/interfaces/route";
import register from "src/pages/auth/register";
import home from "src/pages/home";

const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: home,
    name: "Home Page",
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
    component: register,
    name: "Login Page",
    protected: false,
  },
];

export default routes;
