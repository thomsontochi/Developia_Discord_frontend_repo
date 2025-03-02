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

import GuestRoute from '../routes/GuestRoute';
import VendorRoute from '../routes/VendorRoute';
import EmailVerificationResult from "../pages/auth/EmailVerificationResult";
import VendorDashboard from "../pages/vendor/Dashboard";
import AuthRoute from "./AuthRoute";
import UserDashboard from "../pages/user/Dashboard";
import Mainlayout from "../components/layouts/Mainlayout";

// export const routes = [
//   {
//     path: "/",
//     element: Home,
//     title: "Home | Vendly",
//   },
//   {
//     path: "/about",
//     element: About,
//     title: "About Us | Vendly",
//   },
//   {
//     path: "/blog",
//     element: Blog,
//     title: "Blog | Vendly",
//   },
//   {
//     path: "/contact",
//     element: Contact,
//     title: "Contact Us | Vendly",
//   },
//   {
//     path: "/shop",
//     element: Shop,
//     title: "Shop | Vendly",
//   },
//   {
//     path: "/auth/login",
//     element: Login,
//     title: "Login | Vendly",
//     guard: GuestRoute,
//   },
//   {
//     path: "/auth/register",
//     element: Register,
//     title: "Register | Vendly",
//     guard: GuestRoute,
//   },
//   {
//     path: "/auth/vendor/login",
//     element: VendorLogin,
//     title: "Vendor Login | Vendly",
//     guard: GuestRoute,
//   },
//   {
//     path: "/auth/vendor/register",
//     element: VendorRegister,
//     title: "Vendor Register | Vendly",
//     guard: GuestRoute,
//   },
//   {
//     path: "/vendor/email-verification",
//     element: EmailVerificationResult,
//     title: "Email Verification | Vendly",
//   },
//   {
//     path: "/vendor/dashboard",
//     element: VendorDashboard, 
//     title: "Vendor Dashboard | Vendly",
//     guard: VendorRoute,
//   },
//   {
//     path: "/dashboard",
//     element: UserDashboard,
//     title: "Dashboard | Vendly",
//     guard: AuthRoute, 
//   },
//   {
//     path:"/mainlayout",
//     element: Mainlayout,
//     title: "Layout | Vendly",
//   },
//   {
//     path: "*",
//     element: NotFound,
//     title: "404 - Page Not Found | Vendly",
//   },
// ];


export const routes = [

  // Home route (uses MainLayout)

  {
    path: "/",
    element: MainLayout,
    children: [
      {
        path: "",
        element: Home,
        title: "Home | Vendly",
      },
      {
        path: "about",
        element: About,
        title: "About Us | Vendly",
      },
      {
        path: "blog",
        element: Blog,
        title: "Blog | Vendly",
      },
      {
        path: "contact",
        element: Contact,
        title: "Contact Us | Vendly",
      },
      {
        path: "shop",
        element: Shop,
        title: "Shop | Vendly",
      }
    ]
  },


  // Auth routes (these won't use MainLayout)
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: Login,
        title: "Login | Vendly",
        guard: GuestRoute,
      },
      {
        path: "register",
        element: Register,
        title: "Register | Vendly",
        guard: GuestRoute,
      },
      {
        path: "vendor/login",
        element: VendorLogin,
        title: "Vendor Login | Vendly",
        guard: GuestRoute,
      },
      {
        path: "vendor/register",
        element: VendorRegister,
        title: "Vendor Register | Vendly",
        guard: GuestRoute,
      }
    ]
  },


  // Vendor routes (these might use a different layout)
  {
    path: "/vendor",
    children: [
      {
        path: "dashboard",
        element: VendorDashboard,
        title: "Vendor Dashboard | Vendly",
        guard: VendorRoute,
      },
      {
        path: "email-verification",
        element: EmailVerificationResult,
        title: "Email Verification | Vendly",
      }
    ]
  },

  
  {
    path: "/dashboard",
    element: UserDashboard,
    title: "Dashboard | Vendly",
    guard: AuthRoute,
  },
  {
    path: "*",
    element: NotFound,
    title: "404 - Page Not Found | Vendly",
  }
];
