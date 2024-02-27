import Home from "../pages/Home";
import Contact from "../pages/contact";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
  },
];

export default routes;
