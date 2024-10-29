import React from 'react';
import Header from "../components/layouts/Header.jsx";
import Hero from "../components/Hero.jsx";
import Product from "../components/Product.jsx";
import PopularProduct from "../components/layouts/PopularProduct.jsx";
import Wcu from "../components/layouts/Wcu.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/layouts/Footer.jsx";
// import Hero from '../components/home/Hero';
// import ProductSection from '../components/home/ProductSection';
// import WhyChooseUs from '../components/home/WhyChooseUs';
// import WeHelp from '../components/home/WeHelp';
// import PopularProduct from '../components/home/PopularProduct';
// import Testimonial from '../components/home/Testimonial';
// import BlogSection from '../components/home/BlogSection';

const Home = () => {
    return (
        <>
            {/* <h1> this is home </h1> */}
            {/* <Hero /> */}
            {/* <ProductSection />
      <WhyChooseUs />
      <WeHelp />
      <PopularProduct />
      <Testimonial />
      <BlogSection /> */}
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