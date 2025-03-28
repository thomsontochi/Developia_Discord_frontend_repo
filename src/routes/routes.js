import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VendorLogin from "../pages/auth/VendorLogin";
import VendorRegister from "../pages/auth/VendorRegister";
import GoogleCallback from "../pages/auth/GoogleCallback";

import GuestRoute from '../routes/GuestRoute';

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
    guard: GuestRoute,
  },
  {
    path: "/auth/register",
    element: Register,
    title: "Register | Vendly",
    guard: GuestRoute,
  },
  {
    path: "/auth/vendor/login",
    element: VendorLogin,
    title: "Vendor Login | Vendly",
    guard: GuestRoute,
  },
  {
    path: "/auth/vendor/register",
    element: VendorRegister,
    title: "Vendor Register | Vendly",
    guard: GuestRoute,
  },
  {
    path: "/auth/callback",
    element: GoogleCallback,
    title: "Google Register | Vendly",
    guard: GuestRoute,
  },
  {
    path: "*",
    element: NotFound,
    title: "404 - Page Not Found | Vendly",
  },
];
