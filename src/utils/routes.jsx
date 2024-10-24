import {Route} from "react-router-dom";
import Home from "../layouts/pages/Home.jsx";
import RootLayout from "../layouts/main/RootLayout.jsx";
import Shop from "../layouts/pages/Shop.jsx";
import Contact from "../layouts/pages/Contact.jsx";
import About from "../layouts/pages/About.jsx";
import Services from "../layouts/pages/Services.jsx";
import Blog from "../layouts/pages/Blog.jsx";

export const AllRoutes = (
    <Route path={"/"} element={<RootLayout/>} >
    <Route path={""} element={<Home/>} />
    <Route path={"shop"} element={<Shop/>} />
    <Route path={"about"} element={<About/>} />
    <Route path={"services"} element={<Services/>} />
    <Route path={"blog"} element={<Blog/>} />
    <Route path={"contact"} element={<Contact/>} />
    </Route>
) ;