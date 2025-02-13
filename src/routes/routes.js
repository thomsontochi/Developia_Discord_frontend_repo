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
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Blog from '../pages/Blog';
// import Contact from '../pages/Contact';
// import NotFound from '../pages/NotFound';
import ServicePage from '../pages/ServicePage';
import Cart from '../pages/Cart';

export const routes = [
  {
    path: "/",
    element: Home,
    title: "Home | Vendly",
  },
  {
    path: "/services",
    element: ServicePage,
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
    path: "/auth/vendor/register",
    element: VendorRegister,
    title: "Vendor Register | Vendly",
  },
  {
    path: "*",
    element: NotFound,
    title: "404 - Page Not Found | Vendly",
  },
    {
        path: '/',
        element: Home,
        title: 'Home | Vendly'
    },
    {
        path: '/about',
        element: About,
        title: 'About Us | Vendly'
    },
    {
        path: '/blog',
        element: Blog,
        title: 'Blog | Vendly'
    },
    {
        path: '/contact',
        element: Contact,
        title: 'Contact Us | Vendly'
    },
    {
        path: '/service',
        element: ServicePage,
        title: 'Services | Vendly'
    },
    {
        path: '/cart',
        element: Cart,
        title: 'Services | Vendly'
    },
    {
        path: '*',
        element: NotFound,
        title: '404 - Page Not Found | Vendly'
    },
    {
      path: '/Login',
      element: Login,
      title: 'Login Form | Vendly'
  },
  {
    path: '/Register',
    element: Register,
    title: '404 - Page Not Found | Vendly'
}
];
