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

import GuestRoute from "../routes/GuestRoute";
import VendorRoute from "../routes/VendorRoute";
import AuthRoute from "./AuthRoute";
import EmailVerificationResult from "../pages/auth/EmailVerificationResult";
import VendorDashboard from "../pages/vendor/Dashboard";
import UserDashboard from "../pages/user/Dashboard";
import Mainlayout from "../components/layouts/Mainlayout";

export const routes = [
  // Home route (uses MainLayout)
  {
    path: "/",
    element: Mainlayout,
    children: [
      { path: "", element: Home, title: "Home | Vendly" },
      { path: "about", element: About, title: "About Us | Vendly" },
      { path: "blog", element: Blog, title: "Blog | Vendly" },
      { path: "contact", element: Contact, title: "Contact Us | Vendly" },
      { path: "shop", element: Shop, title: "Shop | Vendly" }
    ]
  },

  // Auth routes
  {
    path: "/auth",
    children: [
      { path: "login", element: Login, guardType: "guest", title: "Login | Vendly" },
      { path: "register", element: Register, guardType: "guest", title: "Register | Vendly" },
      { path: "vendor/login", element: VendorLogin, guardType: "guest", title: "Vendor Login | Vendly" },
      { path: "vendor/register", element: VendorRegister, guardType: "guest", title: "Vendor Register | Vendly" }
    ]
  },

  // Vendor routes
  {
    path: "/vendor",
    children: [
      { path: "dashboard", element: VendorDashboard, guardType: "vendor", title: "Vendor Dashboard | Vendly" },
      { path: "email-verification", element: EmailVerificationResult, title: "Email Verification | Vendly" }
    ]
  },

  // User Dashboard
  {
    path: "/dashboard",
    element: UserDashboard, 
    guardType: "auth",
    title: "Dashboard | Vendly"
  },

  { path: "*", element: NotFound, title: "404 - Page Not Found | Vendly" }
];