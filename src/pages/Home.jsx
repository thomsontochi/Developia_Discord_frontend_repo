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



const Home = () => {
    return (
        <>
           
            <div className="site-wrap">
                <Hero/>
                <Product/>
                <WeHelp />
                <PopularProduct/>
                <TopVendors />
                <TrustIndicators />
                <Testimonials />
                <CTASection />
            </div>
        </>
    );
};

export default Home;