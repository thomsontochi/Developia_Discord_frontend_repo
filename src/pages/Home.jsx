import React from 'react';
import Header from "../components/layouts/Header.jsx";
import Hero from "../components/Hero.jsx";
import Product from "../components/Product.jsx";
import PopularProduct from "../components/layouts/PopularProduct.jsx";
import Wcu from "../components/layouts/Wcu.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/layouts/Footer.jsx";

const Home = () => {
    return (
        <>
           
            <div className="site-wrap">
                <Header/>
                <Hero/>
                <Product/>
                <PopularProduct/>
                <Wcu/>
                <Testimonials/>

                <Footer/>
            </div>
        </>
    );
};

export default Home;