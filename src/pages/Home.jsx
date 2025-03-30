import React from 'react';
import Hero from '../components/Hero';
import Product from '../components/Product';
import WhyChooseUs from '../components/WhyChooseUs';
import PopularProduct from '../components/layouts/PopularProduct';
import WeHelp from '../components/WeHelp';
import Testimonials from '../components/Testimonials';
import TopVendors from '../components/TopVendors';
import TrustIndicators from '../components/TrustIndicators';
import CTASection from '../components/CTASection';
// import CategoryCarousel from '../components/Categories'
import Categories from '../components/Categories';






const Home = () => {
    return (
        <>
           
            <div className="site-wrap">
                <Hero/>
                <TrustIndicators />
                {/* <CategoryCarousel/> */}
                <Product/>
                {/* <WeHelp /> */}
                <PopularProduct/>
               
                {/* <Categories/> */}
               
               
                <TopVendors />
                <Testimonials />
                {/* <CTASection /> */}
            </div>
        </>
    );
};

export default Home;