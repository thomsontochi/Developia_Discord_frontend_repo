import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import Contact from "./pages/Contact.jsx";
import BlogSection from './pages/Blog.jsx';
import Header from './components/layouts/Header.jsx';
import Footer from './components/layouts/Footer.jsx';
import About from './pages/About.jsx';
import ServicePage from './pages/Services.jsx';


function App() {
    return (
        <Router>
             <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/BlogSection" element={<BlogSection />}/>
                <Route path="/aboutPage" element={<About />}/>
                <Route path="/ServicePage" element={<ServicePage /> }/>
            </Routes>
                <Footer />
        </Router>
    );
}

export default App;
