import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import "./App.css";
import Hero from './components/Hero';
import Services from './pages/Services'
function App() {
  return (
    <Router>
      <div className="site-wrap">
        <Header />
        <Hero/>
         <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services/>}/>
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;