import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
import Header from './components/layouts/Header.jsx';
import Footer from './components/layouts/Footer.jsx';
import { routes } from './routes/routes';
import Shop from "./pages/Shop.jsx";


function App() {
    return (
        <Router>
            <Header/>
             <Routes>
                {routes.map(({ path, element: Element }) => (
                    <Route 
                        key={path} 
                        path={path} 
                        element={<Element/>} 
                   />}/>
                <Route path="/shopPage" element={<Shop/>
                ))}
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
