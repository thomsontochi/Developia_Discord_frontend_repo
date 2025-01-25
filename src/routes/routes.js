import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    element: Home,
    title: "Home | Vendly",
  },
  {
    path: "/about",
    element: About,
    title: "About Us | Vendly",
  },
  {
    path: "/blog",
    element: Blog,
    title: "Blog | Vendly",
  },
  {
    path: "/contact",
    element: Contact,
    title: "Contact Us | Vendly",
  },
  {
    path: "/shop",
    element: Shop,
    title: "Shop | Vendly",
  },
  {
    path: "/auth/login",
    element: Login,
    title: "Login | Vendly",
  },
  {
    path: "/auth/register",
    element: Register,
    title: "Register | Vendly",
  },
  {
    path: "/auth/vendor/login",
    element: VendorLogin,
    title: "Vendor Login | Vendly",
  },
  
  {
    path: "*",
    element: NotFound,
    title: "404 - Page Not Found | Vendly",
  },
];
