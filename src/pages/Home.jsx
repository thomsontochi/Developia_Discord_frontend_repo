import React from 'react';
// import Hero from '../components/home/Hero';
import Hero from '../components/Hero';
import Product from '../components/Product';
// import ProductSection from '../components/home/ProductSection';
import WhyChooseUs from '../components/WhyChooseUs';
// import WeHelp from '../components/home/WeHelp';
import PopularProduct from '../components/layouts/PopularProduct';
import WeHelp from '../components/WeHelp';
import Testimonials from '../components/Testimonials';

// import BlogSection from '../components/home/BlogSection';

const Home = () => {
    return (
        <>
           
            <div className="site-wrap">
                <Hero/>
                <Product/>
                <WhyChooseUs />
                <WeHelp />
                <PopularProduct/>
                <Testimonials />
                {/* <Wcu/>
                <Testimonials/> */}

                {/* <Footer/> */}
            </div>
        </>
    );
};

export default Home;