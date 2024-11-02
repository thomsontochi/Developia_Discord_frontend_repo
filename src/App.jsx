import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import Contact from "./pages/Contact.jsx";
import BlogSection from './pages/BlogSection.jsx';
import Header from './components/layouts/Header.jsx';


function App() {
    return (
        <Router>
             <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/BlogSection" element={<BlogSection />}/>
            </Routes>

        </Router>
    );
}

export default App;
