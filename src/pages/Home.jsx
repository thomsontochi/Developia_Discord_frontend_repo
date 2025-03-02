import React from 'react';

import Hero from '../components/Hero';
import Product from '../components/Product';

import WhyChooseUs from '../components/WhyChooseUs';

import PopularProduct from '../components/layouts/PopularProduct';
import WeHelp from '../components/WeHelp';
import Testimonials from '../components/Testimonials';



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
               
            </div>
        </>
    );
};

export default Home;