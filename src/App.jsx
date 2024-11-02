import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import Hero from './components/Hero';
import Product from './components/Product';
import About from './pages/About';
import BlogSection from './pages/BlogSection';

function App() {
  return (
    <Router>
      <div className="site-wrap">
        <Header />
        <Hero/>
        <Product/>
        {/* <PopularProduct/> */}
        {/* <Wcu/> */}
        {/* <Testimonials/> */}
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/BlogSection" element={<BlogSection />} />
        
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
