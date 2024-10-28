import React from 'react';
// import Hero from '../components/home/Hero';
import Hero from '../components/Hero';
import Product from '../components/Product';
// import ProductSection from '../components/home/ProductSection';
import WhyChooseUs from '../components/WhyChooseUs';
import WeHelp from '../components/WeHelp';
// import WeHelp from '../components/home/WeHelp';
// import PopularProduct from '../components/home/PopularProduct';
// import Testimonial from '../components/home/Testimonial';
// import BlogSection from '../components/home/BlogSection';

const Home = () => {
  return (
    <>
    {/* <h1> this is home </h1> */}
      <Hero />
      <Product />
      <WhyChooseUs />
      <WeHelp />
      {/* <ProductSection />
      <WhyChooseUs />
      <WeHelp />
      <PopularProduct />
      <Testimonial />
      <BlogSection /> */}
    </>
  );
};

export default Home;