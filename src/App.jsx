import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import "./App.css";
import Hero from './components/Hero';
import Product from './components/Product';
import Wcu from './components/layouts/Wcu';
import PopularProduct from './components/layouts/PopularProduct';
import Testimonials from './components/Testimonials';



function App() {
  return (
    <Router>
      <div className="site-wrap">
        <Header />
        <Hero/>
        <Product/>
        <PopularProduct/>
        <Wcu/>
        <Testimonials/>
         <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
