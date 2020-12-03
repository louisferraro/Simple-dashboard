import Fulllayout from "../layouts/fulllayout.jsx";
import Login from "../components/login";
import Signup from "../components/signup";

var indexRoutes = [
  { path: "/", name: "Starter", component: Fulllayout },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
];

export default indexRoutes;
