import About from "../pages/About";
import Pages from "../pages/Pages";
import PostIdPage from "../components/PostIdPage";
import Login from "../pages/Login";
export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/pages", component: Pages, exact: true },
  { path: "/pages/:id", component: PostIdPage, exact: true },
  { path: "/pages", component: Pages, exact: true },
];
export const publicRoutes = [
  { path: "/login", component: Login, exact: true }
];
