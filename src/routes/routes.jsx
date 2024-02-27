import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";

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
    path: "/aboutUs",
    element: <AboutUs />,
  },
];

export default routes;
