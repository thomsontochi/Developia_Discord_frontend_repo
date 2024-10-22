import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="site-wrap">
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;