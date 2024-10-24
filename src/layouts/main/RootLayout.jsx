import {Outlet} from "react-router-dom";
import Header from "../../components/layouts/Header.jsx";
import Footer from "../../components/layouts/Footer.jsx";

const RootLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;